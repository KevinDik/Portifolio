import Audios from "../music/Audios"
import styles from "./Experiences.module.css"
import Container from "../layouts/Container"

export default function Experiences () {
    return (
        <Container customClass="paper">
            <div className={styles.experiences}>
                <Audios position="2"/>
            </div>
        </Container>
    )
}