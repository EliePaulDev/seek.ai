import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

export default function Home() {
    return(
        <div className='home'>
            <h1>Seek.ai</h1>
            <form role="search">
                <input className='search-lg' type="search" placeholder="Company..." autoFocus />
                <button className="btn" type="submit"><FontAwesomeIcon icon={faSearch}/> Search</button>
            </form>
        </div>
    )
}

