import React, { createContext, useState } from "react";

export const AppContext = createContext(null);

export const AppProvider = props => {
  const [appForm, setForm] = useState({
    username: "Root",
    theme: 0,
    todo: []
  });

  const defaultValue = { appForm, setForm };

  return <AppContext.Provider value={defaultValue} {...props} />;
};
