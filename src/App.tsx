import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./pages/Routers";
import StatesProvider from "./states/index.provider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <ConfigProvider>
      <QueryClientProvider client={queryClient}>
        <StatesProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </StatesProvider>
      </QueryClientProvider>
    </ConfigProvider>
  );
}

export default App;
