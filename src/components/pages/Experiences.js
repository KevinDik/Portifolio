import Audios from "../music/Audios"
import Container from "../layouts/Container"
import Experience from "../data/Experience"

export default function Experiences () {
    return (
        <div>
            <Audios position="2"/>
            <Container customClass="paper">
                <Experience/>
            </Container>
        </div>
    )
}