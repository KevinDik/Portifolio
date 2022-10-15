import styles from './Cards.module.css'

export default function ProjectCard () {
    return(
        <div className={styles.card}>
            <h1>Projects</h1>
            <ul>
                <li>
                    <h3>Projeto</h3>
                    <h3>Linguagem</h3>
                    <h3>Descrição</h3>
                    <h3>Ano construção</h3>
                    <h3>Ferramentas</h3>
                </li>

                <li>
                    <h3>Projeto</h3>
                    <h3>Linguagem</h3>
                    <h3>Descrição</h3>
                    <h3>Ano construção</h3>
                    <h3>Ferramentas</h3>
                </li>

                <li>
                    <h3>Projeto</h3>
                    <h3>Linguagem</h3>
                    <h3>Descrição</h3>
                    <h3>Ano construção</h3>
                    <h3>Ferramentas</h3>
                </li>
            </ul>
        </div>
        )
}