import {Link} from 'react-router-dom';
import styles from './Navbar.module.css'
import person from "../../img/person.jpg";

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <img className={styles.img} src={person} alt="Minha foto"/>
            <ul className={styles.list}>
                <li className={styles.item}><Link to="/">Abaut Me</Link></li>
                <li className={styles.item}><Link to="/projects">Projects</Link></li>
                <li className={styles.item}><Link to="/contacts">Contacts</Link></li>
            </ul>    
        </div>
    )
}