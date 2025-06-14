import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import { AmountProvider } from "./context/AmountContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AmountProvider>
          <App />
        </AmountProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
