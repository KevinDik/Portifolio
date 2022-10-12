import Audios from "../music/Audios"
import styles from "./Projects.module.css"
import Container from "../layouts/Container"
import Project from "../data/Project"

export default function Projects () {
    return (
        <div className={styles.projects}>
            <Audios position="3"/>
            <Container>
                <Project/>
            </Container>
        </div>
    )
}