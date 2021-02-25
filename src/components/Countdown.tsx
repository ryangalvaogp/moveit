import { useContext, useEffect, useState } from 'react'
import { CountDownContext } from '../contexts/countDownContext'

import styles from '../styles/components/Countdown.module.css'

export default function Countdown() {
    const {hasFinished, 
        isActive,
        minutes,
        resetCountdown,
        seconds,
        startCountdown} = useContext(CountDownContext )
    
    const [minuteLeft, minuteRigth] = String(minutes).padStart(2, '0').split('')
    const [secondsLeft, secondsRigth] = String(seconds).padStart(2, '0').split('')




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
