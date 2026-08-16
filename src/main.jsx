import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, useLocation, useNavigate } from "react-router-dom";
import "./index.css";
import { AppProvider, useApp } from "./state/AppContext";
import AppRouter from "./router";
import { ToastViewport } from "./components/Toast";

function DemoSync() {
  const { reloadFromStorage } = useApp();
  useEffect(() => {
    const onStorage = () => reloadFromStorage();
    const onMessage = () => reloadFromStorage();
    window.addEventListener("storage", onStorage);
    const bc = "BroadcastChannel" in window ? new BroadcastChannel("ers-demo") : null;
    bc?.addEventListener("message", onMessage);
    return () => {
      window.removeEventListener("storage", onStorage);
      bc?.close();
    };
  }, [reloadFromStorage]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <DemoSync />
        <AppRouter />
        <ToastViewport />
      </AppProvider>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(<App />);
