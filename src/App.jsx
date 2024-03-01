import { useState, useEffect, Suspense, lazy } from "react";
import { ThemeContext } from "./context/theme";
// import Home from "./pages/Home";
import { ScaleLoader } from "react-spinners";
const Home = lazy(() => import("./pages/Home"));

function App() {
  const initialTheme = localStorage.getItem("theme") || "dark";
  const [theme, setTheme] = useState(initialTheme);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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
    <Suspense
      fallback={
        <div className="flex items-center justify-center w-full h-screen ">
          <ScaleLoader color="#87ff00" loading={true} width={6} height={40} />
        </div>
      }
    >
      {loading ? (
        <div className="flex items-center justify-center w-full h-screen ">
          <ScaleLoader color="#87ff00" loading={true} width={6} height={40} />
        </div>
      ) : (
        <ThemeContext.Provider value={{ theme, lightTheme, darkTheme }}>
          <div className={`dark:bg-[#0f172a] bg-gray-100`}>
            <Home />
          </div>
        </ThemeContext.Provider>
      )}
    </Suspense>
  );
}

export default App;
