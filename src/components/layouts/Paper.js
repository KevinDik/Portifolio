import styles from './Paper.module.css'

export default function Paper(props) {
    return (
        <div className={`${styles.paper} ${styles[props.customClass]}`}>
            {props.children}
        </div>
    )
}