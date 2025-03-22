import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './CompanyCard.css';
import { useNavigate } from 'react-router';

interface companyCardProps {
    id: string;
    name: string;
    website: string;
    shortDescription?: string;
    imageUrl?: string;
    facebook?: string;
    linkedin?: string;
    twitter?: string;
    location?: string;
    listedStock?:string;

}

export default function CompanyCard({ id, name, website, shortDescription, imageUrl, facebook, linkedin, twitter, location, listedStock } : companyCardProps) {
    const navigate = useNavigate();
    
    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        navigate(`/company/${id}`);
    }
    
    
    
    return (
        <div className='company-card'>
            <div className='company-logo'>
                <img src={imageUrl} alt={name} />
            </div>
            <div>
                <h3><a href={website} target='_blank'>{name}</a></h3>
                <p><em>{listedStock}</em></p>
                <p>Headquarters: {location}</p>
                <p>{shortDescription}</p>
                <div className='social-media'>
                    {facebook && <a href={facebook} target='_blank'><FontAwesomeIcon icon={faFacebook} /></a>}
                    {linkedin && <a href={linkedin} target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>}
                    {twitter && <a href={twitter} target='_blank'><FontAwesomeIcon icon={faTwitter} /></a>}
                </div>
                <button className="btn" onClick={handleClick}>More Info</button>
            </div>
        </div>
    )
}