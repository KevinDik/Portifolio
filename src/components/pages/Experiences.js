import Audios from "../music/Audios"
import Container from "../layouts/Container"
import Experience from "../data/Experience"

export default function Experiences () {
    return (
        <Container customClass="paper">
            <div>
                <Audios position="2"/>
                <Experience/>
            </div>
        </Container>
    )
}