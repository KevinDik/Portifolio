import Navegacao from './components/routes/Navegacao'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Navegacao />
      <div className={styles.modifier}>
        <input className={styles.selector} name="color" id="dark" type="radio" checked></input>
        <input className={styles.selector}  name="color" id="light" type="radio"></input> 
      </div>
    </div>
  )
}

export default App;
