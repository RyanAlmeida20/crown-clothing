import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./components/contexts/user.context";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ProductsProvider } from "./components/contexts/products.context";
import { CartProvider } from "./components/contexts/cart-dropdown.context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CartProvider>
          <ProductsProvider>
            <App />
          </ProductsProvider>
        </CartProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
