import {Link} from 'react-router-dom';
import Container from './Container';
import styles from './Navbar.module.css'
import logo from "../../img/logo.png";

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <img src={logo} alt="Dice"/>
            <Container>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/abautme">Abaut Me</Link></li>
                    <li className={styles.item}><Link to="/projects">Projects</Link></li>
                    <li className={styles.item}><Link to="/experiences">Experiences</Link></li>
                </ul>
            </Container>       
        </div>
    )
}