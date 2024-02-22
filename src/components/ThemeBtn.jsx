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
        variant="outline"
        onClick={handleTheme}
        className={`p-0 text-2xl bg-black border-none hover:text-white dark:text-white hover:bg-black ${className} `}
      >
        {isDark ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
      </Button>
    </>
  );
}
