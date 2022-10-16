import styles from './Article.module.css'
import armadura from '../../img/icons/armadura.png'
import iniciativa from '../../img/icons/iniciativa.png'
import deslocamento from '../../img/icons/deslocamento.png'
import pontosMaximos from '../../img/icons/pontosMaximos.png'
import vidaTemporaria from '../../img/icons/vidaTemporaria.png'
import conjuracao from '../../img/icons/conjuracao.png'

export default function Article() {
    return(
    <article className={styles.article}>
        <ul>
            <li><img className={styles.icons} src={armadura} alt="icone de armadura"/>Classe de Armadura: <span>5</span></li>
            <li><img className={styles.icons} src={iniciativa} alt="icone de iniciativa"/>Iniciativa: <span>8</span></li>
            <li><img className={styles.icons} src={deslocamento} alt="icone de deslocamento"/>Deslocamento: <span>7</span></li>
            <li><img className={styles.icons} src={pontosMaximos} alt="icone de vida maxima"/>Pontos de vida máximos: <span>4</span></li>
            <li><img className={styles.icons} src={vidaTemporaria} alt="icone de vida temporaria"/>Pontos de vida temporários: <span>3</span></li>
            <li><img className={styles.icons} src={conjuracao} alt="icone de conjuração"/>Ataques e Conjuração: <span>6</span></li>
        </ul>
    </article>
    )
}