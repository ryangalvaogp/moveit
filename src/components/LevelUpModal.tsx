import { useContext } from 'react'
import { ChallengesContext } from '../contexts/challengesContex'
import styles from '../styles/components/LevelUpModal.module.css'

export default function LevelUpModal() {

    const {level, colseLevelUpModal} = useContext(ChallengesContext);


    return (

        <div className={styles.LevelUpModalOverlay}>
            <div className={styles.LevelUpModalContainer}>
                <header>{level}</header>

                <strong>Parabéns</strong>
                <p>Você alcançou um novo level</p>

                <button>
                    <img src="/icons/close.svg" onClick={colseLevelUpModal} alt="Fechar modal" />
                </button>
            </div>
        </div>

    )
}
