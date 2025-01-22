import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';


export default function Navbar() {
    return (
        <nav>
            <div className='container-fluid nav-flex'>
                <h2>Seek.ai</h2>
                <button className="btn btn-secondary" name="donate"><FontAwesomeIcon icon={faHandHoldingHeart}/> Donate</button>
            </div>
        </nav>
    )
}