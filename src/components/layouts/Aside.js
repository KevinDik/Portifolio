import styles from './Aside.module.css'

export default function Aside() {
    return(
    <aside className={styles.aside}>
        <ul>
            <li>Traços de personalidade <span>Colocar personalidade</span></li>
            <li>Ideais <span>Colocar meus ideais</span></li>
            <li>Vínculos <span>Colocar meus vinculos</span></li>
            <li>Fraquezas <span>Colocar fraquezas</span></li>
        </ul>
    </aside>
    )
}