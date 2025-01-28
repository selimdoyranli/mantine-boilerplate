import React from "react";
import { Home } from "./pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { UIProvider } from "@ys/ui";

export function App() {
  return (
    <UIProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </UIProvider>
  );
}
