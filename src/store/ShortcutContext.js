import React, { createContext, useState, useEffect } from "react";

const ShortcutContext = createContext();

const ShortcutProvider = ({ children }) => {
  const [shortcuts, setShortcuts] = useState([]);

  useEffect(() => {
    const storedShortcuts = JSON.parse(localStorage.getItem("shortcuts"));
    if (storedShortcuts) {
      setShortcuts(storedShortcuts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("shortcuts", JSON.stringify(shortcuts));
  }, [shortcuts]);

  return (
    <ShortcutContext.Provider value={{ shortcuts, setShortcuts }}>
      {children}
    </ShortcutContext.Provider>
  );
};

export { ShortcutContext, ShortcutProvider };
