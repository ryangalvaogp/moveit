import { useContext } from 'react'
import { ChallengesContext } from '../contexts/challengesContex'
import styleClasses from '../styles/components/ExperienceBar.module.css'

export default function ExperienceBar(){
    const {currentExperience, experienceToNextLevel} = useContext(ChallengesContext)
    
    
    const percentToNextLevel = Math.round(( currentExperience*100)/ experienceToNextLevel);
    return(
        <header className={styleClasses.experienceBar}>
            <span>0</span>
            <div>
                <div style={{width:`${percentToNextLevel}%`}}/>

                <span className={styleClasses.currentExperience} style={{left:`${percentToNextLevel}%`}}>
                    {currentExperience} xp
                </span>
            </div>
            <span>{experienceToNextLevel}</span>
        </header>
    )
}