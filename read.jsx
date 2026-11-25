import { useEffect, useState } from "react";
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import Movies from "./movies";
const Read = () => {
    const [myMovies, setMovie] = useState([]);
    const [deleteMessage, setDeleteMessage] = useState(null);

    // Fetch the latest movies for the initial list and after a deletion.
    const loadMovies = () => {
        console.log('Reloading movie data...');
        axios.get('http://localhost:4000/api/movies')
            .then((response) => {
                setMovie(response.data);
            })
            .catch((error) => {
                console.error('Error reloading data:', error);
            });
    };

    useEffect(() => {
        loadMovies();
    }, []);

    
    return (
        <div>
            <h1>Hello from Read component</h1>
            {deleteMessage && (
                <Alert variant={deleteMessage.variant} dismissible onClose={() => setDeleteMessage(null)}>
                    {deleteMessage.text}
                </Alert>
            )}
            <Movies
                myMovies={myMovies}
                Reload={loadMovies}
                onDeleteResult={(text, variant) => setDeleteMessage({ text, variant })}
            />
        </div>
    );
}

export default Read;