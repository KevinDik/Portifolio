import styles from './Header.module.css'
import personagem from '../../img/personagem.jpg'

export default function Header() {
    return (
        <header className={styles.header}>
            <div>
                <img src={personagem} alt="Personagem"/>
                <h2>Nome do personagem</h2>
            </div>
            <ul>
                <li>Classe</li>
                <li>Raça</li>
                <li>Antecedente</li>
                <li>Alinhamento</li>
                <li>Nome do jogador</li>
                <li>Experiência</li>
            </ul>
        </header>
    )
}