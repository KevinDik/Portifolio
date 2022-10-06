import styles from './Footer.module.css'
import {FaInstagram, FaLinkedin, FaDiscord, FaGithub} from 'react-icons/fa'

export default function Footer() {
    return (
        <div>
            <footer className={styles.footer}>
                <ul className={styles.social_list}>
                    <li><a href="https://www.instagram.com/k__diego.py/" rel="_blank"><FaInstagram/></a></li>
                    <li><a href="https://github.com/KevinDik" rel="_blank"><FaGithub/></a></li>
                    <li><a href="https://discord.gg/974caehh" rel="_blank"><FaDiscord/></a></li>
                    <li><a href="https://www.linkedin.com/in/kevin-diego-78a67b171/"rel="_blank"><FaLinkedin/></a></li>
                </ul>
            </footer>
        </div>
        )
}