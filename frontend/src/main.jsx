import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ShopContextProvider } from "./util/ShopContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AnimatePresence mode="wait">
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </AnimatePresence>
  </BrowserRouter>
);
