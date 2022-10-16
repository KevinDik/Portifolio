import styles from './Header.module.css'
import personagem from '../../img/personagem.jpg'
import cajado from "../../img/icons/cajado.png"
import humano from "../../img/icons/humano.png"
import antecedente from "../../img/icons/antecedente.png"


export default function Header() {
    return (
        <header className={styles.header}>
            <div>
                <img className={styles.logo} src={personagem} alt="Personagem"/>
                <h2>Nome <span>Kevin Sousa</span></h2>
                <p>Meu objetivo é me tornar um desenvolvedor Full Stack aplicando todos meus conhecimentos para produção de um código mais simples de entendimento rápido e aprender de uma forma eficiente.</p>
            </div>
            <ul>
                <li><img className={styles.icons} src={cajado} alt="Icone da classe"/>Classe: <span>Tecnomago</span></li>
                <li><img className={styles.icons} src={humano} alt="Icone da raça"/>Raça: <span>Humano</span></li>
                <li><img className={styles.icons} src={antecedente} alt="Icone do antecedente"/>Antecedente: <span>Sábio</span></li>
            </ul>
        </header>
    )
}