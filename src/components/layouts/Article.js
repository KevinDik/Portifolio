import styles from './Article.module.css'

export default function Article() {
    return(
    <article className={styles.article}>
        <ul>
            <li>Classe de Armadura</li>
            <li>Iniciativa</li>
            <li>Deslocamento</li>
            <li>Pontos de vida máximos</li>
            <li>Pontos de vida temporários</li>
            <li>Ataques e Conjuração</li>
        </ul>
    </article>
    )
}