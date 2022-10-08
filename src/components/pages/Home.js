import Audios from '../music/Audios'
import Container from '../layouts/Container'
import styles from './Home.module.css'
import mapa_principal from '../../img/mapa_principal.png'

export default function Home() {
    return (
        <Container customClass="paper">
            <div className={styles.home}>
                <Audios position="0"/>
                <h1>Mapa principal ainda não desenhado</h1>
                <img src={mapa_principal} alt="Mapa do RPG"/>
            </div>
        </Container>
    )
}
