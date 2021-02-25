import { useContext, useEffect, useState } from 'react'
import { ChallengesContext } from '../contexts/challengesContex';
import styles from '../styles/components/Countdown.module.css'

let countDownTimeout:NodeJS.Timeout;
export default function Countdown() {
    
    const {startNewChallenge} = useContext(ChallengesContext)
    
    const contextData = useContext(ChallengesContext)
   
    // console.log(contextData)

    const [time, setTime] = useState(0.1 * 60)
    const [isActive, setIsActive] = useState(false)

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRigth] = String(minutes).padStart(2, '0').split('')

    const [secondsLeft, secondsRigth] = String(seconds).padStart(2, '0').split('')
const [hasFinished, sethasFinished] = useState (false)


    function startCountdown() {
        setIsActive(true);

    }
    function resetCountdown() {
        clearTimeout(countDownTimeout)
        setIsActive(false);
        setTime(0.1*60);

    }

    useEffect(() => {
        if (isActive && time > 0) {
     countDownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        }else if(isActive && time===0){
            sethasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }

    }, [isActive, time])


    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRigth}</span>


                </div>
                <span>:</span>
                <div>
                    <span>{secondsLeft}</span>
                    <span>{secondsRigth}</span>

                </div>

            </div>


{hasFinished ?
    (
        <button 
        disabled
        className={`${styles.countdownButton}`}>
            Ciclo Encerrado
        </button>
    ):(
        <>
        {isActive ? (
                <button 
                type="button" 
                onClick={resetCountdown} 
                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}>
                    Abandonar o Ciclo
                </button>
            ) : (
                    <button type="button" onClick={startCountdown} className={styles.countdownButton}>
                        Iniciar um Ciclo
                    </button>
                )}
        </>
    )
}




            




        </div>

    )
}
