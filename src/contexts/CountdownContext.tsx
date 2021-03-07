import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextProps {
  time: number;
  isActive: boolean;
  hasFinished: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
}

interface CountdownProviderProps {
  children: ReactNode;
}

let counddownTimeout: NodeJS.Timeout;

export const CountdownContext = createContext({} as CountdownContextProps);

const initialTime = (0.1 * 60);

export function CountdownProvider({children}: CountdownProviderProps) {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(initialTime);
  const [isActive, setActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  function startCountdown() {
    setActive(true);
  }

  function resetCountdown() {
    clearTimeout(counddownTimeout);
    setActive(false);
    setHasFinished(false);
    setTime(initialTime);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      counddownTimeout = setTimeout(() => {
        setTime(time -1);
      }, 1000); 
    } else if (isActive && time == 0) {
      setHasFinished(true);
      setActive(false);
      startNewChallenge();
    }
  }, [isActive, time])

  return (
    <CountdownContext.Provider value={{
      time,
      isActive,
      hasFinished,
      startCountdown,
      resetCountdown
    }}>
      {children}
    </CountdownContext.Provider>
  )
}