import { useRef, useState} from 'react';
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import DonateDialog from '../DonateDialog/DonateDialog';


export default function Navbar() {
    const donateDialogRef = useRef<HTMLDialogElement | null>(null);
    const [showDonateDialog, setShowDonateDialog] = useState(false);


    const toggleDialog = () => {
        if (showDonateDialog) {
            donateDialogRef.current?.close();
        } else {
            donateDialogRef.current?.show();
        }
        setShowDonateDialog(!showDonateDialog);
    }

    return (
        <nav>
            <div className='container-fluid nav-flex'>
                <Link to="/"><h2>Seek.ai</h2></Link>
                <button className="btn btn-secondary" name="donate" onClick={toggleDialog}><FontAwesomeIcon icon={faHandHoldingHeart}/> Donate</button>
                <DonateDialog ref={donateDialogRef} closeDialog={toggleDialog} />
            </div>
        </nav>
    )
}