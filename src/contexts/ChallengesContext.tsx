import { createContext, ReactNode, useState } from 'react';

interface ChallengesProviderProps {
  children: ReactNode;
}

interface ChallangeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  levelUp: Function;
  startNewChallenge: Function;
}

export const ChallengesContext = createContext({} as ChallangeProps);

export function ChallengesProvider({children}: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    console.log("new challenge");
  }

  const challengesProps: ChallangeProps = {
    level,
    currentExperience,
    challengesCompleted,
    levelUp,
    startNewChallenge
  };

  return (
    <ChallengesContext.Provider value={{challengesProps}}>
      {children}
    </ChallengesContext.Provider>
  )

}