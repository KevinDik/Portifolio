import Container from '../layouts/Container'
import styles from './Cards.module.css'

export default function ExperiencesCard({nome, periodo, funcoes}) {
    
    return (
        <Container customClass="columns">
            <div className={styles.card}>
                <h4>{nome}</h4>
                <p><span>Periodo: </span>{periodo}</p>
                <p><span>Qualificações: </span>{funcoes}</p>
            </div>
        </Container>
    )
}