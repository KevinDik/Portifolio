import styles from "./AboutMe.module.css"
import Paper from "../layouts/Paper"

export default function AboutMe() {
    return (
        <Paper>
            <section className={styles.aboutme}>
                <h2>Sobre mim</h2>
                <div className={styles.badges}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="icone html" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="css logo" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript logo" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react logo" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="python logo" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C# logo" />
                    </div>
                <div className={styles.descricao}>
                    <p>Olá! Me Chamo Kevin Sousa, seja bem vindo(a)! Nativo de Fortaleza-CE, gosto de descobrir coisas novas e me aventurar nelas.</p>
                    <p>Atualmente estou cursando faculdade de <strong>Análise e Desenvolvimentos de Sistemas</strong> 3º semestre, onde tive oportunidade de aprender padrões de projeto, sistemas e suas váriações e muitas outras tecnologias.</p>
                    <p>Estudante de programação desde <strong>2017</strong>, tive oportunidade de conhecer muitas linguagens, softwares, frameworks e aplicações nas quais fiz uso para auxiliar em minhas atividades diárias. Hoje me mantenho focado estudando os conceitos de fullstack, usando as linguagens <strong>Html</strong>, <strong>CSS</strong>, e <strong>Javascript</strong>.</p>
                    <p>Possuo conhecimento em automação de tarefas e analise de dados utilizando <strong>python</strong>, e estudo, <strong>C#</strong> para desenvolvimento de sistemas.</p>
                </div>
            </section>
        </Paper>
    )
}