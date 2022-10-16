import styles from './Aside.module.css'

export default function Aside() {
    return(
    <aside className={styles.aside}>
        <h2>Aptidões</h2>
        <ul>
            <li>Tecnologias: <span>C# | Python | Javascript | HTML5 | CSS3 | ReactJS</span></li>
            <li>Idiomas: <span>Inglês-técnico | Português-PtBr.</span></li>
            <li>Conhecimentos: <span>Possuo conhecimento de automação e analise de dados usando python, conhecimentos consideráveis em lógica de programação e alguns frameworks como React, ReactNative</span></li>
        </ul>

        <h2>Experiências profissionais</h2>
        <ul>
            <li>
                <h3>Shopping Rio mar fortaleza 2017-2020</h3>
                <h4>Controlador de trafégo</h4>
                <p>Realizava controle de entrada e saída de veiculos dentro do estacionamento da empresa, prestava suporte ao cliente e a operação e bom funcionamento do setor.</p>

                <h4>Líder de CFTV</h4>
                <p>Responsável por monitorar e operar a equipe de estacionamento, prestando suporte aos controladores e clientes atravez de cominucação via Voip e Rádio, responsável tambem em monitorar o servidor de pagamentos .</p>
            </li>
            <l1>
                <h3>Ideia Telecom 2020-atualmente</h3>
                <h4>Analista de Suporte Técnico nv 1</h4>
                <p>Realizava reparos remotos e ajustes em roteadores entre outros equipamentos para fins de conexão com a internet, prestando suporte ao cliente prontamente.</p>

                <h4>Assistente de Tic</h4>
                <p>Conhecimento de redes Gpon, Epon, PacPon
Realizo o pranejamento mensal e liderança do setor e na correção/padronização das redes. Atuo na parte interna controlando as equipes de campo e auxiliando em seus afazeres, responsável támbem em configurar/ajustar equipamentos de uso diário da equipe.</p>
            </l1>
        </ul>



    </aside>
    )
}