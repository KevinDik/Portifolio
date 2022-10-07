import {Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import Projects from './components/pages/Projects'
import Experiences from './components/pages/Experiences'
import AbautMe from './components/pages/AbautMe'
import styles from './App.module.css'
import Container from './components/layouts/Container'
import Footer from './components/layouts/Footer'

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Navbar/>
        <Container customClass="min-heigth">
          <Routes>
            <Route path="/abautme" element={<AbautMe/>}/>
            <Route path="/experiences" element={<Experiences/>}/>
            <Route path="/projects" element={<Projects/>}/>
          </Routes>
        </Container>
        <Footer/>
      </Router> 
    </div> 
  )
}

export default App;
