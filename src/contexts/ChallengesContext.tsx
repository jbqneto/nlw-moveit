import { createContext, ReactNode, useState } from 'react';
import challenges from '../config/db/challenges.json';

interface ChallengesProviderProps {
  children: ReactNode;
}

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallangeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  levelUp: Function;
  startNewChallenge: Function;
  finishChallenge: (succeded: Boolean) => void;
  experienceToNextLvl: number;
  activeChallenge: Challenge;
}

export const ChallengesContext = createContext({} as ChallangeProps);

export function ChallengesProvider({children}: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(30);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLvl = Math.pow( ( (level + 1) * 4 ), 2);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomIndex];
    setActiveChallenge(challenge);
  }

  function completeChallenge() {
    if (!activeChallenge)
      return;

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLvl) {
      finalExperience = finalExperience - experienceToNextLvl;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);

  }

  function resetChallange() {
    setActiveChallenge(null);
  }

  function finishChallenge(succeded: Boolean) {
    if (!succeded) {
      resetChallange();
    } else {
      completeChallenge();
    }
  }

  const challengesProps: ChallangeProps = {
    level,
    currentExperience,
    challengesCompleted,
    levelUp,
    startNewChallenge,
    finishChallenge,
    activeChallenge,
    experienceToNextLvl
  };

  return (
    <ChallengesContext.Provider value={challengesProps}>
      {children}
    </ChallengesContext.Provider>
  )

}