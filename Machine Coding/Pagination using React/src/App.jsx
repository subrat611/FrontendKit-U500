import { useEffect, useState } from "react";
import data from "./data.json";
import ProductCard from "./components/ProductCard";

const PAGE_SIZE = 10;

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setProducts(data.products);
  }, []);

  const totalProducts = products.length;
  const numberOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE; // (0 * 10) = 0, (1*10) = 10
  const end = start + PAGE_SIZE; // (0 + 10) = 10, (10+10) = 20

  const handlePageChange = (n) => {
    setCurrentPage(n);
  };

  const handleGoToNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handleGoToPrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="container">
      <div className="products">
        {!products.length && <p>No Product Found</p>}
        {products.length > 0 &&
          products
            .slice(start, end)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>

      {/* Pagination */}
      {products.length > 0 && (
        <div className="page-container">
          <button
            disabled={currentPage === 0 && true}
            className="page-number"
            onClick={handleGoToPrevPage}
          >
            👈️
          </button>

          {[...Array(numberOfPages).keys()].map((n) => (
            <button
              key={n}
              className={`page-number ${currentPage === n && "page-active"}`}
              onClick={() => handlePageChange(n)}
            >
              {n}
            </button>
          ))}

          <button
            disabled={currentPage === numberOfPages - 1 && true}
            className="page-number"
            onClick={handleGoToNextPage}
          >
            👉️
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
