import Audios from "../music/Audios"
import Container from "../layouts/Container"
import Project from "../data/Project"

export default function Projects () {
    return (
        <div>
            <Audios position="3"/>
            <Container customClass="paper">
                <Project/>
            </Container>
        </div>
    )
}