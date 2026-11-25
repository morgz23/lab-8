import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useState } from 'react';
const MovieItem = (props) => {
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = () => {
        // Prevent duplicate requests while this movie is being deleted.
        if (isDeleting) return;
        setIsDeleting(true);

        // Delete this movie by ID, then refresh the list on success.
        axios.delete(`http://localhost:4000/api/movie/${props.mymovie._id}`)
            .then(() => {
                console.log('Movie deleted');
                props.onDeleteResult('Movie deleted.', 'success');
                props.Reload();
            })
            .catch((error) => {
                console.log('Movie not deleted', error);
                props.onDeleteResult('Movie not deleted.', 'danger');
                setIsDeleting(false);
            });
    };

    return (
        <Card className="movie-card text-center">
            <Card.Body>
                <Card.Title>{props.mymovie.title}</Card.Title>
                <img className="movie-poster" src={props.mymovie.poster} alt={`${props.mymovie.title} poster`} />
            </Card.Body>
            <Card.Footer className="movie-card-footer text-muted">
                <span>{props.mymovie.year}</span>
                <Button className="movie-delete" size="sm" variant="danger" onClick={handleDelete} disabled={isDeleting}>
                    {isDeleting ? 'Deleting...' : 'Delete'}
                </Button>
            </Card.Footer>
        </Card>
    );
}
export default MovieItem;