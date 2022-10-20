import styles from "./AbautMe.module.css"

export default function AbautMe() {
    return (
        <div className={styles.abautme}>
            <h1>Sobre mim</h1>
            <p>Olá! Me Chamo Kevin Sousa, seja bem vindo(a)! Atualmente estou cursando faculdade de Análise e Desenvolvimentos de Sistemas 3º semestre. Sou estudante de programação desde 2017, tive oportunidade de conhecer muitas linguegens e atualmente mantenho meu foco em fullstack. Html, CSS, e Javascript. Possuo conhecimento em automação de tarefas utilizando python, e estudo C# para desenvolvimento de sistemas.</p>
            <h1>Linguagens</h1>
            <ul>
                <li>Python</li>
                <li>Csharp</li>
                <li>Javascript</li>
                <li>HTML</li>
                <li>Css</li>
            </ul>
        </div>
        )
}