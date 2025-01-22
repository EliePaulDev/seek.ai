import './Home.css';

export default function Home() {
    return(
        <div className='home'>
            <h1>Seek.ai</h1>
            <form role="search">
                <input className='search-lg' type="search" placeholder="Company..." />
                <button className="btn" type="submit">Search</button>
            </form>
        </div>
    )
}

