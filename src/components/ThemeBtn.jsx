import React, { useRef, useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { Button } from "./ui/button";
import useTheme from "@/context/theme";
import { motion } from "framer-motion";

export default function ThemeBtn({ className, ...props }) {
  const { theme, lightTheme, darkTheme } = useTheme();
  const [isDark, setIsDark] = useState(true);
  const ref = useRef();

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
      <motion.div ref={ref} {...props}>
        <Button
          onClick={handleTheme}
          className={`p-0 px-1 text-2xl bg-red border-none hover:text-amber-400 dark:text-white hover:red ${className} `}
        >
          {!isDark ? (
            <MdOutlineLightMode className="hover:text-amber-400" />
          ) : (
            <MdOutlineDarkMode className="hover:text-amber-400" />
          )}
        </Button>
      </motion.div>
    </>
  );
}
