import { useEffect, useState } from 'react'
import styles from '../styles/components/Countdown.module.css'


export default function Countdown() {

const [time, setTime] = useState (25*60)
const [active, setActive] = useState (false)

const minutes =  Math.floor(time/60) ;
const seconds = time % 60;

const [minuteLeft, minuteRigth] = String(minutes).padStart(2, '0').split('')

const [secondsLeft, secondsRigth] = String(seconds).padStart(2, '0').split('')


function startCountdown(){
    setActive(true);

}

function stopCountdown(){
    setActive(false);

}


useEffect(()=>{
    if(active && time>0){
        setTimeout(()=>{
            setTime(time-1)
        }, 1000)
    }
},[active, time])


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
        {active === false ? (
            <button type="button" onClick={startCountdown} className={styles.countdownButton}>
            Iniciar um Ciclo
    </button>
        ):(
            <button type="button" onClick={stopCountdown} className={styles.countdownButton}>
            Parar o Ciclo
    </button>
        ) }
            
        </div>

    )
}
