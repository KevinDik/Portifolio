import styles from './Cards.module.css'
import Paper from '../layouts/Paper'

export default function ProjectCard () {
    return(
        <Paper>
            <div className={styles.card}>
                <h1>Projects</h1>
                <ul>
                    <li>
                        <h3>Projeto: <span>Calculadora</span></h3>
                        <h3>Linguagem: <span>C#</span></h3>
                        <h3>Descrição: <span>Desenvolvido em Visual studio code, uma calculadora simples que realiza algumas operações</span></h3>
                        <h3>Ano construção: <span>2022</span></h3>
                    </li>

                    <li>
                        <h3>Projeto: <span>Agenda Telefônica</span></h3>
                        <h3>Linguagem: <span>C#</span></h3>
                        <h3>Descrição: <span>Para aplicar conceitos de classes, desenvolvi uma agenda telefônica simples que grava dados em um arquivo .txt</span></h3>
                        <h3>Ferramentas</h3>
                    </li>

                    <li>
                        <h3>Projeto: <span>Reconhecimento de imagem</span></h3>
                        <h3>Linguagem: <span>Python</span></h3>
                        <h3>Descrição: <span>Programado para interagir com a câmera do desktop e identificar quando há mãos na imagem</span></h3>
                        <h3>Ano construção: <span>2021</span></h3>
                    </li>

                </ul>
            </div>
        </Paper>
        )
}