/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
  return (
    <div key={product.id} className="product-card">
      <p>{product.title}</p>
    </div>
  );
};

export default ProductCard;
