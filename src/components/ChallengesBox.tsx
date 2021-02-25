import { useContext } from 'react'
import { ChallengesContext } from '../contexts/challengesContex'
import styles from '../styles/components/ChallengesBox.module.css'

export default function ChallengesBox() {

   const {activeChallenge,resetChallenge, levelUp }= useContext(ChallengesContext) 
    
   
    return (
        <div className={styles.challengesBoxContainer}>
            {activeChallenge ? (
                <div className={styles.challengesActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt="asd" />
                        <strong>Novo Desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button className={styles.challengeFailedButton} onClick={resetChallenge} type="button">Falhei</button>
                        <button className={styles.challengeSuccededButton} onClick={levelUp} type="button">Completei</button>
                    </footer>
                </div>

            ) : (

                    <div className={styles.challengesNotActive}>
                        <strong>Finalize um ciclo para receber um desafio</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level UP" />
            Avance de level completando desafios.
        </p>
                    </div>
                )}
        </div>
    )
}
