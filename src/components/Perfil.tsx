import { useContext } from 'react'
import { ChallengesContext } from '../contexts/challengesContex'
import styles from '../styles/components/Perfil.module.css'

export default function Perfil(){
    const {level} = useContext( ChallengesContext)
    return (
        <div className={styles.perfilCOntainer}>
            <img src="https://github.com/ryangalvaogp.png" alt="Ryan Galvão"/>
            <div>
                <strong> Ryan Galvão</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}
                    </p>
            </div>
        </div>
    )
}