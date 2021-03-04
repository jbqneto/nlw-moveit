import styles from './Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/jbqneto.png" alt="Jose Bezerra" title="Jose Bezerra" />
      <div>
        <strong>José Bezerra</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </div>
  )
}