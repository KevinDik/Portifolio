import {Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import Projects from './components/pages/Projects'
import AboutMe from './components/pages/AboutMe'
import Contacts from './components/pages/Contacts'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<AboutMe/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/Contacts" element={<Contacts/>}/>
          </Routes>
      </Router> 
    </div> 
  )
}

export default App;
