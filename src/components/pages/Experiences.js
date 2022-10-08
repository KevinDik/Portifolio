import Audios from "../music/Audios"
import Container from "../layouts/Container"
import ExperiencesCard from "../cards/ExperiencesCard"

export default function Experiences () {
    return (
        <Container customClass="paper">
            <div>
                <Audios position="2"/>
                <ExperiencesCard
                empresa={"Nome da empresa"}
                tempo_serviço={"tempos de serviço"}
                qualificações={"qualificações"}
                />
            </div>
        </Container>
    )
}