import styles from './Contact.module.css'
import {FaInstagram, FaGithub, FaDiscord, FaLinkedin, FaWhatsapp} from 'react-icons/fa'
import Paper from '../layouts/Paper'

export default function Contacts() {
    return (
        <Paper>
            <section className={styles.contato}>
                <h1>Posso te ajudar em algo?</h1>
                <h2>Mantenha contato!</h2>
                <ul>
                        <li><a className={styles.instagram} href="https://www.instagram.com/k__diego.py/" ><FaInstagram/>Instagram</a></li>
                        <li><a className={styles.github}href="https://github.com/KevinDik" rel><FaGithub/>GitHub</a></li>
                        <li><a className={styles.discord}href="https://discord.gg/974caehh"><FaDiscord/>Discord</a></li>
                        <li><a className={styles.linkedn}href="https://www.linkedin.com/in/kevin-diego-78a67b171/"><FaLinkedin/>Linkedn</a></li>
                        <li><a className={styles.whatsapp}href="https://api.whatsapp.com/send?phone=5585999289198" ><FaWhatsapp/>Whatsapp</a></li>
                    </ul>
            </section>
        </Paper>
    )
}