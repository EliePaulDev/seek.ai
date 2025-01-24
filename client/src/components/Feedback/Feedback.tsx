import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import './Feedback.css';

export default function Feedback() {
    return (
        <div className="feedback">
            <button className="btn btn-secondary"><FontAwesomeIcon icon={faCommentDots} /> Feedback</button>
        </div>
    )
}