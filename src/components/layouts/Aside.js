import styles from './Aside.module.css'

export default function Aside() {
    return(
    <aside className={styles.aside}>
        <ul>
            <li>Traços de personalidade</li>
            <li>Ideais</li>
            <li>Vínculos</li>
            <li>Fraquezas</li>
        </ul>
    </aside>
    )
}