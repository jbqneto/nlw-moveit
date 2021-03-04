import Head from 'next/head'
import ExperienceBar from '../src/components/ExperienceBar';
import { Profile } from '../src/components/Profile';

import styles from '../src/styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />
       
       <section>
         <div>
           <Profile />
         </div>
         <div>

         </div>
       </section>

    </div>
  )
}
