import Audios from '../music/Audios'
import styles from './Home.module.css'
import mapa_principal from '../../img/mapa_principal.png'

export default function Home() {
    return (
        <>
            <Audios position="0"/>
            <div className={styles.home}>
                <h1>Mapa principal ainda não desenhado</h1>
                <div>
                    <img src={mapa_principal} alt="Mapa do RPG"/>
                </div>
            </div>
        </>

    )
}
