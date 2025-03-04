import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import DialogFeedback from "../DialogFeedback/DialogFeedback";
import './Feedback.css';

export default function Feedback() {
    const [dialogStatus, setDialogStatus] = useState(false);
    
    function handleClick() {
        toggleDialog();
    }

    function toggleDialog() {
        setDialogStatus(!dialogStatus);
    }

    function showDialog() {
        return dialogStatus ? <DialogFeedback toggleDialog={toggleDialog} /> : null;
    }



    return (
        <div className="feedback">
            {showDialog()}
            <button className="btn btn-secondary btn-feedback" onClick={handleClick}><FontAwesomeIcon icon={faCommentDots} /> Feedback</button>
        </div>
    )
}