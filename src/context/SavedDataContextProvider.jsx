import { useState } from "react";
import SavedDataContext from "./SavedDataContext";
const SavedDataContextProvider = ({ children }) => {
  const [savedData, setSavedData] = useState([]);
  return (
    <SavedDataContext.Provider value={{ savedData, setSavedData }}>
      {children}
    </SavedDataContext.Provider>
  );
};

export default SavedDataContextProvider;
