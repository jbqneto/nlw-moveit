import { useState, useEffect, useContext } from 'react';
import styles from './Countdown.module.css';

import { ChallengesContext } from '../../contexts/ChallengesContext';

let counddownTimeout: NodeJS.Timeout;

const initialTime = (0.1 * 60);

export function Countdown() {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(initialTime);
  const [isActive, setActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const secounds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secLeft, secRight] = String(secounds).padStart(2, '0').split('');

  function startCountdown() {
    setActive(true);
  }

  function resetCountdown() {
    clearTimeout(counddownTimeout);
    setActive(false);
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
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secLeft}</span>
          <span>{secRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.countdownButton}>
          <span>Ciclo encerrado</span>
        </button>
      ) : (
        <>
          { isActive ? (
            <button onClick={resetCountdown} type="button" className={`${styles.countdownButton} ${styles.countdownButtonActive}`}>
              <span>Abandonar ciclo</span>
            </button>
          ) : (
            <button onClick={startCountdown} type="button" className={styles.countdownButton}>
              <span>Iniciar um ciclo</span>
            </button>
          ) }
        </>
      )}


    </div>
  );
}