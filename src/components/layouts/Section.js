import styles from './Section.module.css'

export default function Section() {
    return(
    <section className={styles.section}>
        <ul>
            <li>Força</li>
            <li>Destreza</li>
            <li>Constituição</li>
            <li>Ingeligência</li>
            <li>Sabedoria</li>
            <li>Carisma</li>
        </ul>
    </section>)
}