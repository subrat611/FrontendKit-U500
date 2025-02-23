import ProgressBar from "./components/ProgressBar";

function App() {
  return (
    <div className="MainContainer">
      <h1>Progress Bar</h1>
      <ProgressBar progress={60} />
    </div>
  );
}

export default App;
