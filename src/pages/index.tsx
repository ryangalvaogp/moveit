import { GetServerSideProps } from 'next'
import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";
import ExperienceBar from "../components/ExperienceBar";
import Perfil from "../components/Perfil";
import styles from "../styles/pages/Home.module.css"

import Head from 'next/head'
import ChallengesBox from "../components/ChallengesBox";
import { ChallengesProvider } from '../contexts/challengesContex';
import { CountDownProvider } from '../contexts/countDownContext';

interface propsOfGetServerSidePropsData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}



export default function Home(props: propsOfGetServerSidePropsData) {

  console.log(props)
  return (
    <ChallengesProvider 
    level={props.level} 
    currentExperience={props.currentExperience} 
    challengesCompleted={props.challengesCompleted}
    >
      <CountDownProvider>
        <div className={styles.container}>

          <Head>
            <title>Início | Move.it</title>
          </Head>

          <ExperienceBar />

          <section >
            <div >
              <Perfil />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengesBox />
            </div>

          </section>
        </div>
      </CountDownProvider>
    </ChallengesProvider>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;



  return {
    props: {
      level:Number(level),
      currentExperience:Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}