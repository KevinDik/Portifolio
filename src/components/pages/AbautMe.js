import Audios from "../music/Audios"
import Header from "../layouts/Header"
import Section from "../layouts/Section"
import Article from "../layouts/Article"
import Aside from "../layouts/Aside"

import styles from "./AbautMe.module.css"

export default function AbautMe() {
    return (
        <div className={styles.abautme}>
            <Audios position="0"/>
            <Header/>
            <Section/>
            <Article/>
            <Aside/>
        </div>
        )
}