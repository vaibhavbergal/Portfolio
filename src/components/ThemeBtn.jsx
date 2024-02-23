import React, { useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { Button } from "./ui/button";
import useTheme from "@/context/theme";

export default function ThemeBtn({ className, ...props }) {
  const { theme, lightTheme, darkTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  const handleTheme = () => {
    if (theme === "light") {
      darkTheme();
      setIsDark(true);
    }
    if (theme === "dark") {
      lightTheme();
      setIsDark(false);
    }
  };

  return (
    <>
      <Button
        onClick={handleTheme}
        className={`p-0 text-2xl bg-red border-none hover:text-amber-400 dark:text-white hover:red ${className} `}
      >
        {isDark ? (
          <MdOutlineDarkMode className="hover:text-amber-400" />
        ) : (
          <MdOutlineLightMode className="hover:text-amber-400" />
        )}
      </Button>
    </>
  );
}
