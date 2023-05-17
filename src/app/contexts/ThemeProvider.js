// ThemeProvider.js
"use client";
import React, { useState, useEffect } from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children }) => {
  const [activeTheme, setActiveTheme] = useState("light");
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      setActiveTheme(theme);
    } else {
      const prefersDarkMode =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      setActiveTheme(prefersDarkMode ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", activeTheme);
    document.body.dataset.theme = activeTheme;
  }, [activeTheme]);

  const toggleTheme = () => setActiveTheme(inactiveTheme);

  return (
    <ThemeContext.Provider value={{ activeTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
