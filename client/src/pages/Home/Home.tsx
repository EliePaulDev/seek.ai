import { useState } from 'react';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

export default function Home() {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value);
    }
    
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        navigate(`/search?company=${search}`);
    }

    return(
        <div className='home'>
            <h1>Seek.ai</h1>
            <form role="search" onSubmit={handleSubmit}>
                <input className='search-lg' type="search" placeholder="Company..." onChange={handleChange} value={search} autoFocus />
                <button className="btn" type="submit"><FontAwesomeIcon icon={faSearch}/> Search</button>
            </form>
        </div>
    )
}

