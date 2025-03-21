import Header from '../components/Header.tsx';
import React, { useState } from 'react';

function Delete() {
    const [animalId, setAnimalId] = useState('');
    const [message, setMessage] = useState('');

    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://sra-system-backend-999646529726.us-central1.run.app/animal/${animalId}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                setMessage('Animal deleted successfully');
                setAnimalId('');
            } else {
                throw new Error('Failed to delete');
            }
        } catch (error) {
            setMessage('Error deleting animal');
            console.error('Error:', error); 
        }
    };

    return (
        <>
            <Header />
            <div className="container">
                <h2>Delete Animal</h2>
                <form onSubmit={handleDelete}>
                    <div className="form-group">
                        <label>Animal ID:</label>
                        <input
                            type="text"
                            value={animalId}
                            onChange={(e) => setAnimalId(e.target.value)}
                            className="form-control"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-danger">Delete Animal</button>
                </form>
                {message && <div className="alert mt-3">{message}</div>}
            </div>
        </>
    );
}

export default Delete;