export default function Container(props) {
    return (
        <div className={`${styles.container} ${styles[prop.customClass]}`}>{props.children}</div>
        )
}