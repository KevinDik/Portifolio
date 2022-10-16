import {Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import Projects from './components/pages/Projects'
import AbautMe from './components/pages/AbautMe'
import styles from './App.module.css'
import Footer from './components/layouts/Footer'

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<AbautMe/>}/>
            <Route path="/projects" element={<Projects/>}/>
          </Routes>
        <Footer/>
      </Router> 
    </div> 
  )
}

export default App;
