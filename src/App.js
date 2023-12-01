import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div>
      <Navbar />
      <ProductList showEditDelete={false} />
    </div>
  );
}

export default App;
