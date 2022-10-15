import Audios from "../music/Audios"
import Header from "../layouts/Header"
import Section from "../layouts/Section"
import Article from "../layouts/Article"
import Aside from "../layouts/Aside"
import styles from "./AbautMe.module.css"

export default function AbautMe() {
    return (
        <div className={styles.abautme}>
            <Audios position="1"/>
            <Header customClass="header_text"/>
            <div className={styles.columns}>
                <Section customClass="header_text"/>
                <Article customClass="header_text"/>
                <Aside customClass="header_text"/>
            </div>
        </div>
        )
}