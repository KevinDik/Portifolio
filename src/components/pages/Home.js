import Audios from '../music/Audios'
import styles from './Home.module.css'
import mapa_principal from '../../img/mapa_principal.png'
import Paper from '../layouts/Paper'

export default function Home() {
    return (
        <>
            <Audios position="0"/>
            <div className={styles.home}>
                <h1>Explore pelo mapa</h1>
                <Paper customClass="fadeIn">
                    <img src={mapa_principal} alt="Mapa do RPG" className={styles.fadeIn}/>
                </Paper>
            </div>
        </>

    )
}
