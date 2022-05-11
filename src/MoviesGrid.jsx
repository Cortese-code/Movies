import { MovieCard } from "./MivieCard";
import movies from "./movies.json";
import stytes from "./MoviesGrid.module.css"

export function MoviesGrid(){
  //  console.log(movies)
    
    return (
        <ul className={stytes.moviesGrid}>
            {movies.map((movies) =>(
                 <MovieCard  key={movies.id} movie ={movies} />
            ))}
        </ul>
    );
}