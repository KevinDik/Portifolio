import styles from './Section.module.css'
import forca from '../../img/icons/forca.png'
import destreza from '../../img/icons/destreza.png'
import constituicao from '../../img/icons/constituicao.png'
import inteligencia from '../../img/icons/inteligencia.png'
import sabedoria from '../../img/icons/sabedoria.png'
import carisma from '../../img/icons/carisma.png'

export default function Section() {
    return(
    <section className={styles.section}>
        <ul>
            <li><img className={styles.icons} src={forca} alt="Icone de força"/>Força: <span>11</span></li>
            <li><img className={styles.icons} src={destreza} alt="Icone de destreza"/>Destreza: <span>15</span></li>
            <li><img className={styles.icons} src={constituicao} alt="Icone de contituição"/>Constituição: <span>5</span></li>
            <li><img className={styles.icons} src={inteligencia} alt="Icone de inteligencia"/>Ingeligência: <span>8</span></li>
            <li><img className={styles.icons} src={sabedoria} alt="Icone de sabedoria"/>Sabedoria: <span>9</span></li>
            <li><img className={styles.icons} src={carisma} alt="Icone de carisma"/>Carisma: <span>11</span></li>
        </ul>
    </section>
    )
}