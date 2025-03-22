import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import DialogFeedback from "../DialogFeedback/DialogFeedback";
import './Feedback.css';

export default function Feedback() {
    const [dialogStatus, setDialogStatus] = useState(false);

    const feedbackRef = useRef<HTMLDialogElement | null>(null);

    function toggleDialog() {
        if(dialogStatus) {
            feedbackRef.current?.close();
        }
        else {
            feedbackRef.current?.show();
        }
        setDialogStatus(!dialogStatus);
    }

    return (
        <div className="feedback">
            <DialogFeedback ref={feedbackRef} closeDialog={toggleDialog} />
            <button className="btn btn-secondary btn-feedback" onClick={toggleDialog}><FontAwesomeIcon icon={faCommentDots} /> Feedback</button>
        </div>
    )
}