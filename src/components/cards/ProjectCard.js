import styles from './Cards.module.css'
import Container from '../layouts/Container'

export default function ProjectCard ({nome, linguagem, descricao, ano_construcao, ferramentas}) {
    return(
        <Container customClass="columns">
            <div className={styles.card}>
                <h4>{nome}</h4>
                <p><span>Linguagem: </span>{linguagem}</p>
                <p><span>Descrição: </span> {descricao}</p>
                <p><span>Ano de publicação: </span> {ano_construcao}</p>
                <p><span>Ferramentas: </span>{ferramentas}</p>
            </div>
        </Container>
        )
}