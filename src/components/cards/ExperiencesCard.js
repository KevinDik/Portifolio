import Container from '../layouts/Container'
import styles from './Cards.module.css'

export default function ExperiencesCard({empresa, tempo_serviço, qualificações}) {
    return (
        <Container customClass="columns">
            <div className={styles.card}>
                <h4>{empresa}</h4>
                <p><span>Tempo de permanência: </span>{tempo_serviço}</p>
                <p><span>Qualificaçõe: </span>{qualificações}</p>
            </div>
        </Container>
    )
}