import React, { useContext } from "react";
import ThemeContext from "./HelpingComponents/theme-context";

const UseContext = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Switch to {isDarkMode ? "Light" : "Dark"} Theme
    </button>
  );
};

export default UseContext;
