import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Navbar from '../layouts/Navbar'
import Projects from '../pages/Projects'
import AboutMe from '../pages/AboutMe'
import Contacts from '../pages/Contacts'

export default function Navegacao() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<AboutMe />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/Contacts" element={<Contacts />} />
            </Routes>
        </Router>
    )
}