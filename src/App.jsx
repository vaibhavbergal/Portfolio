import { useState, useEffect } from "react";
import { ThemeContext } from "./context/theme";
import Home from "./pages/Home";

function App() {
  const initialTheme = localStorage.getItem("theme") || "dark";
  const [theme, setTheme] = useState(initialTheme);

  const lightTheme = () => {
    setTheme("light");
  };

  const darkTheme = () => {
    setTheme("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");

    document.querySelector("html").classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, lightTheme, darkTheme }}>
      <div className={`dark:bg-[#0f172a]`}>
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
