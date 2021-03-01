import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export const Profile = () =>{
    const {level} = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/wellingtondsf.png" alt=""/>
            <div>
                <strong>Wellington Santos</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}
                    
                    </p>
            </div>
        </div>
    )
}