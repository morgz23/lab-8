import MovieItem from './movieItem';
const Movies = (props)=>{
    return (
        <div className="movies-grid">
            {/* Pass each movie's delete callback and list refresh function to its card. */}
            {props.myMovies.map((movie) => (
                <MovieItem
                    mymovie={movie}
                    Reload={props.Reload}
                    onDeleteResult={props.onDeleteResult}
                    key={movie._id}
                />
            ))}
        </div>
    );
}
export default Movies;