import styles from './Header.module.css'
import personagem from '../../img/personagem.jpg'

export default function Header() {
    return (
        <header className={styles.header}>
            <div>
                <img src={personagem} alt="Personagem"/>
                <h2>Nome <span>Kevin Sousa</span></h2>
                <p>Meu objetivo é me tornar um desenvolvedor Full Stack aplicando todos meus conhecimentos para produção de um código mais simples de entendimento rápido e aprender de uma forma eficiente.</p>
            </div>
            <ul>
                <li>Classe: <span>Tecnomago</span></li>
                <li>Raça: <span>Humano</span></li>
                <li>Antecedente: <span>Sábio</span></li>
            </ul>
        </header>
    )
}