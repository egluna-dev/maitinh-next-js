import styles from '../styles/Countdown.module.scss'

export default function Countdown() {
    return (
        <div className={styles.container}>
            <div className={styles.section}>
                <h1>Days</h1>
                <h2>00</h2>
            </div>
            <div className={styles.section}>
                <h1>Hours</h1>
                <h2>00</h2>
            </div>
            <div className={styles.section}>
                <h1>Minutes</h1>
                <h2>00</h2>
            </div>
            <div className={styles.section}>
                <h1>Seconds</h1>
                <h2>00</h2>
            </div>
        </div>
    )
}
