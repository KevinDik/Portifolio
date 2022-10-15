import styles from './Cards.module.css'

export default function ExperiencesCard() {
    return (
        <div className={styles.data}>
            <h1>Experiences</h1>
            <h1>Companies</h1>
            <ul>
                <li>
                    <h3>Empresa</h3>
                    <h3>Período</h3>
                    <h3>Funções</h3>
                    <ol>
                        <li>Retenção recepctivo</li>
                        <li>Retenção ativo</li>
                        <li>Backoffice</li>
                    </ol>
                </li>

                <li>
                    <h3>Empresa 2</h3>
                    <h3>Período</h3>
                    <h3>Funções</h3>
                    <ol>
                        <li>Controlador de tráfego</li>
                        <li>Lider de CFTV</li>
                    </ol>
                </li>

                <li>
                    <h3>Empresa 3</h3>
                    <h3>Período</h3>
                    <h3>Funções</h3>  
                    <ol>
                        <li>Analista de helpdesk</li>
                        <li>Assistente de Ti (rede externa)</li>
                    </ol>
                </li>
            </ul>
        </div>
    )
}