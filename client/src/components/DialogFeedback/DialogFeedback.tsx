import { useState, forwardRef } from "react";
import "./DialogFeedback.css";


function feedbackForm({handleSubmit, handleChange}) {
    return (
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Name" onChange={handleChange} required />
        </div>
        <div className="form-group">
            <label htmlFor="type">Feedback Type</label>
            <select id="type" name="type" onChange={handleChange} required>
                <option value="">Select</option>
                <option value="bug">Report A Bug</option>
                <option value="feature">Suggest A New Feature</option>
                <option value="compliment">Send A Compliment</option>
            </select>
        </div>
        <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" placeholder="Message" onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send Feedback</button>
    </form>
    )
}




const DialogFeedback = forwardRef<HTMLDialogElement | null, { closeDialog: () => void}>(function DialogFeedback({closeDialog}, ref) {
    const [feedback, setFeedback] = useState({
        name: '',
        type: '',
        message: ''
    });

    const [submitSuccess, setSubmitSuccess] = useState(false);
    
    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        console.log(feedback);
        fetch(`${import.meta.env.VITE_API_URL}/feedback/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"feedback": feedback})
        })
        .then(response => {
            if (response.ok) {
                setSubmitSuccess(true);
            } else {
                alert('Failed to send feedback');
            }
        }
        )
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
        setFeedback({
            ...feedback,
            [event.target.name]: event.target.value
        });
    }

  


    return (
            <dialog ref={ref} className="dialog-feedback">
                <h2>Feedback</h2>
                <button className="btn btn-close" onClick={closeDialog}>X</button>
                {!submitSuccess && <p>Send us your feedback</p>}
                {submitSuccess ? <p>Feedback sent successfully</p> : feedbackForm({handleSubmit, handleChange})}
                
            </dialog>
    );
});


export default DialogFeedback;