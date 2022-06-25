import styles from '../styles/Countdown.module.scss'
import { useState, useEffect } from 'react'
import { getRemainingTimeToTimestamp } from '../utils/CountDownTimerUtils'

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00',
}

export default function Countdown({ countdownTimestamp }) {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intId = setInterval(() => {
            updateRemainingTime(countdownTimestamp);
        }, 1000)

        return () => clearInterval(intId)
    }, [countdownTimestamp])

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeToTimestamp(countdown))
    }

    return (
        <div className={styles.container}>
            <div className={styles.section}>
                <h1>Days</h1>
                <h2>30</h2>
            </div>
            <div className={styles.section}>
                <h1>Hours</h1>
                <h2>10</h2>
            </div>
            <div className={styles.section}>
                <h1>Minutes</h1>
                <h2>32</h2>
            </div>
            <div className={styles.section}>
                <h1>Seconds</h1>
                <h2>10</h2>
            </div>
        </div>
    )
}
