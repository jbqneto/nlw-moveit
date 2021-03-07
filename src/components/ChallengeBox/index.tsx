import { useContext, useEffect, useState } from 'react';
import styles from './ChallengeBox.module.css';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountdownContext } from '../../contexts/CountdownContext';

export function ChallengeBox() {
  const { activeChallenge, finishChallenge } = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);
  
  function handleChallengeSucceded() {
    finishChallenge(true);
    resetCountdown();
  }

  function handleChallengeFailed() {
    finishChallenge(false);
    resetCountdown();
  }

  return (
    <div className={styles.challengeBoxContainer}>
      { activeChallenge ? (
      <div className={styles.challengeActive}>
        <header>Ganhe {activeChallenge.amount} xp</header>

        <main>
          <img src={`icons/${activeChallenge.type}.svg`} alt="Tipo do desafio"/>
          <strong>Novo desafio</strong>
          <p>{activeChallenge.description}</p>
        </main>

        <footer>
          <button 
            onClick={handleChallengeFailed} 
            className={styles.challengeFailed} 
            type="button">
              Falhei
          </button>
          
          <button 
            onClick={handleChallengeSucceded} 
            className={styles.challengeSucceded} 
            type="button">
              Completei
          </button>
        </footer>

      </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Leveu up"/>
            Avance de level completando desafios
          </p>
        </div>
      ) }
    </div>
  )
}