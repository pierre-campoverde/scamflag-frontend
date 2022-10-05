import React, { createContext, useState } from "react";
import Navigation from "../components/organisms/Navigation";

const Root = () => {
  const [darkMode, setDarkMode] = useState(false);
  const ThemeContext = createContext(darkMode);
  const toggleDarkMode = () => {
    setDarkMode((darkMode) => !darkMode);
  };
  return (
    <ThemeContext.Provider value={darkMode}>
      <main className={`flex w-full  min-h-screen ${darkMode && "dark"}`}>
        <div className="w-3/12 bg-slate-100 dark:bg-zinc-800 flex flex-col justify-center">
          <Navigation toggleDarkModeCB={toggleDarkMode} />
        </div>
        <div></div>
      </main>
    </ThemeContext.Provider>
  );
};

export default Root;
