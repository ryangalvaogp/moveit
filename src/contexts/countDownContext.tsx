import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./challengesContex";


interface CountDownProviderProps {
    children: ReactNode
}

interface CountDownContextData {
    minutes: number;  
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    resetCountdown: () => void;
    startCountdown: () => void;
}

let countDownTimeout: NodeJS.Timeout;
export const CountDownContext = createContext({} as CountDownContextData)
export function CountDownProvider({ children }: CountDownProviderProps) {
    
    
    const { startNewChallenge } = useContext(ChallengesContext)

    const contextData = useContext(ChallengesContext)

    // console.log(contextData)

    const [time, setTime] = useState(0.05 * 60)
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, sethasFinished] = useState(false)

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;



    function startCountdown() {
        setIsActive(true);

    }
    function resetCountdown() {
        clearTimeout(countDownTimeout)
        setIsActive(false);
        setTime(0.1 * 60);
        sethasFinished(false)

    }

    useEffect(() => {
        if (isActive && time > 0) {
            countDownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        } else if (isActive && time === 0) {
            sethasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }

    }, [isActive, time])






    return (
        <CountDownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            resetCountdown,
            startCountdown
        }}>
            {children}
        </CountDownContext.Provider>
    )
}
