import Audios from "../music/Audios"
import styles from "./Projects.module.css"
import ProjectCard from "../cards/ProjectCard"

export default function Projects () {
    return (
        <div className={styles.projects}>
            Projetos
            <Audios position="3"/>
            <ProjectCard
            name={"Nome do projeto"}
            id={""}
            data={"data de inicio"}
            progress={"Progresso"}
            />
        </div>
    )
}