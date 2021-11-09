import styled from "styled-components";
import {
  Moviecard,
  Movieinfo,
  Movieimage,
  Moviesynopsis,
} from "../Styles/Moviecard.styled";

function Movies(movies) {
  return (
    <>
      <MoviesList>
        <div>
          {movies.data
            .filter((movie) => movie.poster_path) //using filter to only ahow movies with posters
            .map((movie) => (
              <Moviecard key={movie.id}>
                <Movieimage
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title + "poster"}
                />
                <Movieinfo>
                  <h2>{movie.title}</h2>
                  <Moviesynopsis>
                    Synopsis: {movie.overview ? movie.overview : "N/A"}
                  </Moviesynopsis>
                  <p>
                    Release Date:{" "}
                    {movie.release_date ? movie.release_date : "N/A"}
                  </p>
                  <p>
                    Rating: {movie.vote_average}/10 ({movie.vote_count})
                  </p>
                </Movieinfo>
              </Moviecard>
            ))}
        </div>
      </MoviesList>
    </>
  );
}

export default Movies;

const MoviesList = styled.div`
  margin-top: 20px;
`;
