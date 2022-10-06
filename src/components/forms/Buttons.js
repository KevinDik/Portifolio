import styles from './Buttons.module.css';

export default function Buttons({text}){
    return (
        <div>
            <button className={styles.btn}>{text}</button>
        </div>
    )
}