import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./index.css";
import App from "./App.js";
import TylerPage from "./pages/TylerPage.js";
import MumPage from "./pages/MumPage.js";
import "./input.css";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/" element={<App />} />
        <Route path="/tyler" element={<TylerPage />} />

        <Route path="/mum" element={<MumPage />} />
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Router />);
