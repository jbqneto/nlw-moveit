import styles from './CompletedChallanges.module.css';

import { ChallengesContext } from '../../contexts/ChallengesContext';
import { useContext } from 'react';

export function CompletedChallanges() {

  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <div className={styles.challangeContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  )
}