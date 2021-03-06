import { useContext, useEffect, useState } from 'react';
import styles from './ChallengeBox.module.css';
import { ChallengesContext } from '../../contexts/ChallengesContext';

export function ChallengeBox() {
  const { activeChallenge, finishChallenge } = useContext(ChallengesContext);

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
            onClick={() => finishChallenge(false)} 
            className={styles.challengeFailed} 
            type="button">
              Falhei
          </button>
          
          <button 
            onClick={() => finishChallenge(true)} 
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