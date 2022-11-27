import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { Cart } from "./components/Cart";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductsList";
import { api } from "./services/api";
import "react-toastify/dist/ReactToastify.min.css";
import { StayledApp } from "./styleApp";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);

  const [item, setItem] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const request = await api.get("products");
        setProducts(request.data);
      } catch (err) {
        console.log(err);
      }
    }
    getProducts();
  }, []);

  return (
    <StayledApp className="container">
      <Header
        products={products}
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
      />
      <div className="main">
        {filteredProducts.length === 0 ? (
          <>
            <ProductList
              products={products}
              currentSale={currentSale}
              setCurrentSale={setCurrentSale}
              item={item}
              setItem={setItem}
            />
            <Cart
              currentSale={currentSale}
              setCurrentSale={setCurrentSale}
              item={item}
              setItem={setItem}
            />
          </>
        ) : (
          <>
            <ProductList
              products={filteredProducts}
              currentSale={currentSale}
              setCurrentSale={setCurrentSale}
              item={item}
              setItem={setItem}
            />
            <Cart
              currentSale={currentSale}
              setCurrentSale={setCurrentSale}
              item={item}
              setItem={setItem}
            />
          </>
        )}
      </div>
      <ToastContainer />
    </StayledApp>
  );
}

export default App;
req.end();
