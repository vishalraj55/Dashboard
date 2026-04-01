import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ScanDetail from "./pages/ScanDetail";

export default function App() {
  // default dark
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    const root = document.documentElement;

    // persist theme
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <Routes>
      <Route path="/" element={<Login theme={theme} setTheme={setTheme} />} />
      <Route
        path="/dashboard"
        element={<Dashboard theme={theme} setTheme={setTheme} />}
      />
      <Route
        path="/scan/:id"
        element={<ScanDetail theme={theme} setTheme={setTheme} />}
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}