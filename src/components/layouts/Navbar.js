import {Link} from 'react-router-dom';
import Container from './Container';

export default function Navbar() {
    return (
        <div>
            <Container>
                <ul>
                    <li><Link to="/abautme">Abaut Me</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/experiences">Experiences</Link></li>
                </ul>
            </Container>       
        </div>
    )
}