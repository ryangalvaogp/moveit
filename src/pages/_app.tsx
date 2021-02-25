import '../styles/global.css'
import { ChallengesContext, ChallengesProvider } from '../contexts/challengesContex'
import { useState } from 'react'
import { CountDownProvider } from '../contexts/countDownContext'



function MyApp({ Component, pageProps }) {

  return (

    <ChallengesProvider >
      <CountDownProvider>
        <Component {...pageProps} />
      </CountDownProvider>
    </ChallengesProvider>

  )
}

export default MyApp
