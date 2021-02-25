import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";
import ExperienceBar from "../components/ExperienceBar";
import Perfil from "../components/Perfil";
import styles from "../styles/pages/Home.module.css"

import Head from 'next/head'
import ChallengesBox from "../components/ChallengesBox";

export default function Home() {
  return (
    <div className={styles.container}>

<Head>
  <title>Início | Move.it</title>
</Head>

      <ExperienceBar />

      <section >
        <div >
          <Perfil />
          <CompletedChallenges/>
          <Countdown/>
        </div>
        <div>
      <ChallengesBox/>
        </div>

      </section>
    </div>
  )
}
