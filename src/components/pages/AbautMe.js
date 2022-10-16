import Audios from "../music/Audios"
import Header from "../layouts/Header"
import Section from "../layouts/Section"
import Article from "../layouts/Article"
import Aside from "../layouts/Aside"
import styles from "./AbautMe.module.css"
import Paper from "../layouts/Paper"

export default function AbautMe() {
    return (
        <div className={styles.abautme}>
            <Audios position="1"/>
            <Paper customClass="fadeIn">
                <Header customClass="header_text"/>
                <div className={styles.columns}>
                    <Section customClass="header_text"/>
                    <Article customClass="header_text"/>
                    <Aside customClass="header_text"/>
                </div>
            </Paper>
        </div>
        )
}