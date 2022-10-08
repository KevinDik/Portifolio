import styles from './ProjectCard.module.css'
import { Link } from 'react-router-dom'

export default function ProjectCard ({name, id, data, progress}) {
    return(
        <div className={styles.projectCard}>
            <h4>{name}</h4>
            <p>
                <span>Progresso: </span> {progress}
            </p>
            <p>
                <span>Data de inicio: </span> {data}
            </p>
            <div>
                <Link to={'/project/' + id}>
                    <button>Visualizar detalhes</button>
                </Link>
            </div>
        </div>
        )
}