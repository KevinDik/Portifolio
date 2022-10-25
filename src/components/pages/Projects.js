import Paper from '../layouts/Paper'
import styles from './Projects.module.css'


export default function Projects () {
    return (
        <Paper>
            <div className={styles.projects}>
                <div className={styles.descricao}>
                    <section>
                        <h2>Gerenciador de projetos</h2>
                        <h3>Desenvolvido usando React (HTML, CSS, Javascript)</h3>
                        <a href="https://github.com/KevinDik/Gerenciador_de_Projetos" target="_blank">Acesse o projeto</a>
                        <p>Ferramenta que será capaz de cadastrar novos projetos, a partir disto ter um melhor dimencionamento em relação aos atuais custos de cada projeto ativo.</p>
                    </section>
                    <section>
                        <h2>Agenda Telefônica</h2>
                        <h3>Desenvolvido usando Csharp</h3>
                        <a href="https://github.com/KevinDik/Agenda_telefonica" target="_blank">Acesse o projeto</a>
                        <p>Ferramenta capaz de cadastrar editar e excluir novos contatos. Agenda que guarda nome e telefone de uma determinada pessoa.</p>
                    </section>
                    <section>
                        <h2>IMC-Calculator</h2>
                        <h3>Desenvolvido usando React Native (HTML, CSS, Javascript)</h3>
                        <a href="https://github.com/KevinDik/IMC-Calculator" target="_blank">Acesse o projeto</a>
                        <p>Aplicação mobile que realiza o calculo do índice de massa corporal com base na altura e seu peso.</p>
                    </section>
                </div>
            </div>
        </Paper>
    )
}