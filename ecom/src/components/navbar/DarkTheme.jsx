import React, { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdNightlight } from "react-icons/md";
const DarkTheme = () => {
  const [theme, setTheme] = useState(
    //  local theme setting
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // get html element
  const el = document.documentElement;

  useEffect(() => {
    //add dark & remove dark theme
    if (theme === "dark") {
      el.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      el.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  return (
    <div className="relative">
      {/* light theme */}
      <CiLight
        title="Theme"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`text-3xl text-gray-900 cursor-pointer transition-all duration-300 hover:animate-spin animation-duration-1000 
       ${theme == "dark" ? "hidden" : "block"}`}
      />
      {/* dark theme */}
      <MdNightlight
        title="Theme"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`text-3xl text-white cursor-pointer  transition-all duration-300 hover:animate-pulse animation-duration-1000 
          ${theme == "dark" ? "block" : "hidden"}`}
      />
    </div>
  );
};

export default DarkTheme;
