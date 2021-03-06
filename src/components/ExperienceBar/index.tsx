import styles from './ExperienceBar.module.css';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { useContext } from 'react';

export default function ExperienceBar() {
  const { currentExperience, experienceToNextLvl } = useContext(ChallengesContext);

  const percentToNextLvl = Math.round(currentExperience * 100) / experienceToNextLvl;

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{width: `${percentToNextLvl}%`}}>
          <span className={styles.currentExperience} style={{left: `${percentToNextLvl}%`}}>
            {currentExperience} xp
          </span>
        </div>
      </div>
      <span>{experienceToNextLvl} xp</span>
    </header>
  );
}