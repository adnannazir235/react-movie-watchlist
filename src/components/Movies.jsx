import { useState } from "react";
import AddMovies from "./AddMovies";

export default function Movies(props) {
  const [movies, setMovies] = useState(props.movies);
  //   console.log(movies);

  function markMovieStatus(index, movie) {
    // console.log({ index, movie });
    const updatedStatusMovies = movies.map((m, i) => {
      if (i === index) {
        return { ...movie, watched: !m.watched };
      } else {
        return m;
      }
    });

    // console.log(updatedStatusMovies);
    setMovies(updatedStatusMovies);
  }

  function checkMoviesStatus() {
    const allWatched = movies.every((m) => m.watched === true);
    // console.log(allWatched);
    return allWatched;
  }

  function unwatchMovies() {
    const moviesUnwatched = movies.map((movie) => {
      return { ...movie, watched: false };
    });

    setMovies(moviesUnwatched);
  }

  function addMovie(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const newMovieData = Object.fromEntries([...data.entries()]);

    if (newMovieData.watched === "Yes") {
      newMovieData.watched = true;
    } else {
      newMovieData.watched = false;
    }

    // console.log(newMovieData);
    setMovies([...movies, newMovieData]);
  }

  return (
    <>
      <div className="row my-4">
        <div className="col-4">
          <AddMovies addMovies={addMovie} />
        </div>

        <div className="col">
          <h2>Your Movies</h2>
          <div className="row">
            {movies.map((movie, index) => {
              return (
                <div className="col-12 border mb-3 p-2 rounded" key={index}>
                  <div className="row">
                    <div className="col-2 border-end">
                      <img
                        src={movie.img}
                        className="user-select-none"
                        style={{
                          maxWidth: "100%",
                          height: "100%",
                          objectFit: "scale-down",
                        }}
                        alt={movie.title + " - Movie Poster"}
                      />
                    </div>

                    <div className="col">
                      <div className="row mb-2">
                        <div className="col">
                          <h3 className="fs-5">{movie.title}</h3>
                        </div>

                        <div className="col-auto">
                          <span
                            style={{ verticalAlign: "-webkit-baseline-middle" }}
                          >
                            {movie.genre}
                          </span>
                        </div>

                        <div className="col-auto">
                          <span
                            style={{ verticalAlign: "-webkit-baseline-middle" }}
                          >
                            {movie.watched === false
                              ? "(Watch Now)"
                              : "(Watched)"}
                          </span>
                        </div>
                      </div>

                      <p className="fs-6">{movie.description}</p>

                      <button
                        className={
                          movie.watched === false
                            ? "btn fs-6 btn-outline-primary"
                            : "btn fs-6 btn-primary"
                        }
                        onClick={() => {
                          markMovieStatus(index, movie);
                        }}
                      >
                        {movie.watched === false
                          ? "Mark as Watched"
                          : "Mark as Unwatched"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {checkMoviesStatus() && (
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="mb-0">🎉 All movies watched!</h2>
          <button
            className="btn btn-primary"
            onClick={(event) => {
              unwatchMovies(event);
            }}
          >
            Unwatch All Movies ▶
          </button>
        </div>
      )}
    </>
  );
}
