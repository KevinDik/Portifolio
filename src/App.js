import {Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import Projects from './components/pages/Projects'
import Home from './components/pages/Home'
import Experiences from './components/pages/Experiences'
import AbautMe from './components/pages/AbautMe'
import styles from './App.module.css'
import Footer from './components/layouts/Footer'

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/abautme" element={<AbautMe/>}/>
            <Route path="/experiences" element={<Experiences/>}/>
            <Route path="/projects" element={<Projects/>}/>
          </Routes>
        <Footer/>
      </Router> 
    </div> 
  )
}

export default App;
