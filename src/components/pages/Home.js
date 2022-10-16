import Audios from '../music/Audios'
import styles from './Home.module.css'
import city_map from '../../../src/maps/city_map.png'
import Paper from '../layouts/Paper'

export default function Home() {
    return (
        <>
            <Audios position="0"/>
            <div className={styles.home}>
                <h1>Explore pelo mapa</h1>
                <Paper customClass="fadeIn">
                    <img src={city_map} alt="Mapa do RPG" className={styles.fadeIn}/>
                </Paper>
            </div>
        </>

    )
}
