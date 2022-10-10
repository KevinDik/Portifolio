import Audios from "../music/Audios"
import styles from "./Projects.module.css"
import ProjectCard from "../cards/ProjectCard"
import LinkButton from "../layouts/LinkButton"
import Container from "../layouts/Container"

export default function Projects () {
    return (
        <div className={styles.projects}>
            <Audios position="3"/>
            <LinkButton to="/newproject" text="Adicionar um novo projeto" />
            <Container>
                <ProjectCard
                name={"Nome do projeto"}
                id={""}
                data={"data de inicio"}
                progress={"Progresso"}
                />
            </Container>
        </div>
    )
}