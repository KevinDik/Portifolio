import styles from './Section.module.css'

export default function Section() {
    return(
    <section className={styles.section}>
        <ul>
            <li>Força: <span>11</span></li>
            <li>Destreza: <span>15</span></li>
            <li>Constituição: <span>5</span></li>
            <li>Ingeligência: <span>8</span></li>
            <li>Sabedoria: <span>9</span></li>
            <li>Carisma: <span>11</span></li>
        </ul>
    </section>
    )
}