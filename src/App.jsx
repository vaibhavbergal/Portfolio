import { useState, useEffect } from "react";
import { ThemeContext } from "./context/theme";
import Home from "./pages/Home";

function App() {
  const [theme, setTheme] = useState("light");

  const lightTheme = () => {
    setTheme("light");
  };

  const darkTheme = () => {
    setTheme("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");

    document.querySelector("html").classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, lightTheme, darkTheme }}>
      <div className=" dark:bg-gray-900">
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
