import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./AppRoutes.tsx";
import { BrowserRouter } from "react-router-dom";
import { UIProvider } from "@yamada-ui/react"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <BrowserRouter>
          <UIProvider>
            <AppRoutes />
          </UIProvider>
      </BrowserRouter>
  </StrictMode>
);
