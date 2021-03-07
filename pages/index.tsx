import { GetServerSideProps } from 'next';
import Head from 'next/head'
import { ChallengeBox } from '../src/components/ChallengeBox';
import { CompletedChallanges } from '../src/components/CompletedChallanges';
import { Countdown } from '../src/components/Countdown';
import ExperienceBar from '../src/components/ExperienceBar';
import { Profile } from '../src/components/Profile';
import { ChallengesProvider } from '../src/contexts/ChallengesContext';
import { CountdownProvider } from '../src/contexts/CountdownContext';

import styles from '../src/styles/Home.module.css';

interface User {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

interface HomeProps {
  user: User
}

export default function Home({user}: HomeProps) {
  return (
    <ChallengesProvider 
      level={user.level}
      currentExperience={user.currentExperience}
      challengesCompleted={user.challengesCompleted}
      >
      <div className={styles.container}>
        <Head>
          <link rel="shortcut icon" href="favicon.png" type="image/png/" />
        </Head>
        <ExperienceBar />
        
        <CountdownProvider>
          <section>
              <div>
                <Profile />
                <CompletedChallanges />
                <Countdown />
              </div>
              <div>
                <ChallengeBox />
              </div>
          </section>
        </CountdownProvider>

      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  const user: User = {
    level: Number(level),
    currentExperience: Number(currentExperience),
    challengesCompleted: Number(challengesCompleted)
  };

  return {
    props: {
      user
    }
  }
}