import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppRouter } from "./router/AppRouter";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <AppRouter />
    </StrictMode>
  </BrowserRouter>,
);
