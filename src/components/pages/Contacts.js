import styles from './Contact.module.css'
import {FaInstagram, FaGithub, FaDiscord, FaLinkedin, FaWhatsapp} from 'react-icons/fa'

export default function Contacts() {
    return (
        <div className={styles.contato}>
            <ul className={styles.social_list}>
                    <li><a href="https://www.instagram.com/k__diego.py/" rel="_blank"><FaInstagram/></a></li>
                    <li><a href="https://github.com/KevinDik" rel="_blank"><FaGithub/></a></li>
                    <li><a href="https://discord.gg/974caehh" rel="_blank"><FaDiscord/></a></li>
                    <li><a href="https://www.linkedin.com/in/kevin-diego-78a67b171/"rel="_blank"><FaLinkedin/></a></li>
                    <li><a href="https://api.whatsapp.com/send?phone=5585999289198" rel="_blank"><FaWhatsapp/></a></li>
                </ul>
        </div>
    )
}