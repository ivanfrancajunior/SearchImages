import React from "react";
const DEFAULT_SEACH = import.meta.env.VITE_DEFAULT_SEARCH;

export const GlobalContext = React.createContext<GlobalProviderProps>(
  {} as GlobalProviderProps
);

interface GlobalProviderProps {
  query: string;
  setQuery: (query: string) => void;
}

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [query, setQuery] = React.useState(DEFAULT_SEACH);
  return (
    <GlobalContext.Provider value={{ query, setQuery }}>
      {children}
    </GlobalContext.Provider>
  );
};

//eslint-disable-next-line
export const useGlobalContext = () => React.useContext(GlobalContext);
