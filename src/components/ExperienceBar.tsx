import styleClasses from '../styles/components/ExperienceBar.module.css'

export default function ExperienceBar(){
    
    let currentExperienceProgress = 50 //Limit of 100
    
    const styles={
        span:{
            currentExperienceProgress:{
                left:`${currentExperienceProgress}%`
            }
        }
    }
    return(
        <header className={styleClasses.experienceBar}>
            <span>0</span>
            <div>
                <div style={{width:styles.span.currentExperienceProgress.left}}/>

                <span className={styleClasses.currentExperience} style={styles.span.currentExperienceProgress}>
                    {600*(currentExperienceProgress/100)} xp
                </span>
            </div>
            <span>600</span>
        </header>
    )
}