import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import CartProvider from "./Contex/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <App />
  </CartProvider>
);
