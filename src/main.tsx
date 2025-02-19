import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Toaster } from "@/components/ui/toaster"
import { LanguageProvider } from "./context/LanguageContext";
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
   
      <LanguageProvider>
      <BrowserRouter>
        <App />
        <Toaster />
        </BrowserRouter>
      </LanguageProvider>
   
  </StrictMode>
);
