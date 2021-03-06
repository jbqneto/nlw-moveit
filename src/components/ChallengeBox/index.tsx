import { useEffect, useState } from 'react';
import styles from './ChallengeBox.module.css';

export function ChallengeBox() {
  
  const [isChallengeActive, setChallengeActive] = useState(false);

  useEffect(() => {
    setChallengeActive(false);
  }, [])

  return (
    <div className={styles.challengeBoxContainer}>
      { !isChallengeActive ? (
      <div className={styles.challengeActive}>
        <header>Ganhe 400 xp</header>

        <main>
          <img src="icons/body.svg" alt=""/>
          <strong>Novo desafio</strong>
          <p>Levante e faça alguma coisa</p>
        </main>

        <footer>
          <button className={styles.challengeFailed} type="button">Falhei</button>
          <button className={styles.challengeSucceded} type="button">Completei</button>
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