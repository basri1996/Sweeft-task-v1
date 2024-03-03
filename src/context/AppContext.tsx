import { createContext, useContext, useState } from "react";
type AppCompContextType = {
  value: any;
  setValue: any;
};

const AppContext = createContext<AppCompContextType>({} as AppCompContextType);



export const AppContextProvider = ({ children }: any) => {
  const [value, setValue] = useState("");

  return (
    <AppContext.Provider value={{  value, setValue }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const data = useContext(AppContext);
  return data;
};
