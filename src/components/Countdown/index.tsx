import { useState, useEffect, useContext } from 'react';
import styles from './Countdown.module.css';

import { CountdownContext } from '../../contexts/CountdownContext';

export function Countdown() {

  const { 
    time, 
    hasFinished, 
    isActive, 
    startCountdown, 
    resetCountdown 
  } = useContext(CountdownContext);


  const minutes = Math.floor(time / 60);
  const secounds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secLeft, secRight] = String(secounds).padStart(2, '0').split('');

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