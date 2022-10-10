import Buttons from '../forms/Buttons'
import styles from './Cards.module.css'
import { Link } from 'react-router-dom'
import agenda_telefonica from '../../img/projects_image/agenda_telefonica.png'
import Container from '../layouts/Container'

export default function ProjectCard ({name, languages, id, data, progress}) {
    return(
        <Container customClass="columns">
            <div className={styles.card}>
                <h4>{name}</h4>
                <img src={agenda_telefonica} alt="Imagem do projeto"/>
                <p><span>Linguagem: </span>{languages}</p>
                <p><span>Progresso: </span> {progress}</p>
                <p><span>Data de inicio: </span> {data}</p>
                <div>
                    <Link to={'/project/' + id}>
                        <Buttons text="Visualizar detalhes"/>
                    </Link>
                </div>
            </div>
        </Container>
        )
}