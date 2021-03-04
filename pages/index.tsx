import Head from 'next/head'
import { CompletedChallanges } from '../src/components/CompletedChallanges';
import { Countdown } from '../src/components/Countdown';
import ExperienceBar from '../src/components/ExperienceBar';
import { Profile } from '../src/components/Profile';

import styles from '../src/styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="shortcut icon" href="favicon.png" type="image/png/" />
      </Head>
      <ExperienceBar />
       
       <section>
         <div>
           <Profile />
           <CompletedChallanges />
           <Countdown />
         </div>
         <div>

         </div>
       </section>

    </div>
  )
}
