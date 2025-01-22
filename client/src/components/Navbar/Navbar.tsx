import './Navbar.css';


export default function Navbar() {
    return (
        <nav>
            <div className='container-fluid nav-flex'>
                <h2>Seek.ai</h2>
                <button className="btn btn-secondary" name="donate">Donate</button>
            </div>
        </nav>
    )
}