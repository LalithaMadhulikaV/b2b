import React, { useState } from "react";
import MyContext from "./MyContext";

const MyContextProvider = ({ children }) => {
  const [contextData, setContextData] = useState(/* your initial data here */);

  return (
    <MyContext.Provider value={{ contextData, setContextData }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
