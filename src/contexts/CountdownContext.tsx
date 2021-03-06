import { createContext, ReactNode } from "react";

interface CountdownContextProps {

}

interface CountdownProviderProps {
  children: ReactNode;
}

const CountdownContext = createContext({} as CountdownContextProps);

export function CountdownProvider({children}: CountdownProviderProps) {
  return (
    <CountdownContext.Provider value={{}}>
      {children}
    </CountdownContext.Provider>
  )
}