import { useState, forwardRef} from 'react';
import './DonateDialog.css';

function donationForm({handleSubmit, handleChange}) {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Name" onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="amount">Amount:</label>
                <input type="number" id="amount" name="amount" placeholder="Amount" onChange={handleChange} required />
            </div>
            <button type="submit" className="btn btn-primary">Donate</button>
        </form>
    )
}




const DonateDialog = forwardRef<HTMLDialogElement | null, { closeDialog :() => void }>(function DonateDialog({closeDialog}, ref) {
    const [donation, setDonation] = useState({
        name: '',
        amount: ''
    });

    const [submitSuccess, setSubmitSuccess] = useState(false);

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        console.log(donation);
        fetch(`${import.meta.env.VITE_API_URL}/donate/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"donation": donation})
        })
        .then(response => {
            if (response.ok) {
                setSubmitSuccess(true);
            } else {
                alert('Failed to send donation');
            }
        }
        )
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setDonation({
            ...donation,
            [event.target.name]: event.target.value
        });
    }

    return (
        <dialog ref={ref} className="donate-dialog">
            <h2>Donate</h2>
            <button className="btn btn-close" onClick={closeDialog}>X</button>
            {!submitSuccess && <p>Donate to support the project</p>}
            {submitSuccess ? <p>Thank you for your donation!</p> : donationForm({handleSubmit, handleChange})}
        </dialog>  
    )
})

export default DonateDialog;