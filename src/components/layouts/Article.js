import styles from './Article.module.css'

export default function Article() {
    return(
    <article className={styles.article}>
        <ul>
            <li>Classe de Armadura: <span>5</span></li>
            <li>Iniciativa: <span>8</span></li>
            <li>Deslocamento: <span>7</span></li>
            <li>Pontos de vida máximos: <span>4</span></li>
            <li>Pontos de vida temporários: <span>3</span></li>
            <li>Ataques e Conjuração: <span>6</span></li>
        </ul>
    </article>
    )
}