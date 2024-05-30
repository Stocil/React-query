import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/App/App.tsx";
import "./style/main.scss";

import { Theme } from "./theme/Theme.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Theme>
        <App />
      </Theme>
    </QueryClientProvider>
  </React.StrictMode>
);
