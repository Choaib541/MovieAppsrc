import Button from "@mui/material/Button";
import MovieCard from "./MovieCard";
import Container from "@mui/material/Container";
import StyledMoviesGrid from "./styles/MoviesGrid.styled";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setMovies } from "../../store/features/Movies";
import axios from "../../API/Api";
const MoviesGrid = ({ search }) => {
  const Movies = useSelector((state) => state.Movies.value);
  const Config = useSelector((state) => state.Config.value);
  const [FoundedMovies, setFoundedMovies] = useState(true);
  const dispatch = useDispatch();
  const [PageCounter, setPageCounter] = useState(1);
  function getMovies(REST_OF_URL) {
    const COMPLETE_URL = Config["BASE_URL"] + REST_OF_URL + Config["API_KEY"];
    axios
      .get(COMPLETE_URL)
      .then((res) => dispatch(setMovies(res.data.results)));
    setPageCounter(PageCounter + 1);
  }
  function GenerateMovies() {
    const CompleteURL =
      Config["BASE_URL"] +
      `discover/movie?page=${PageCounter}&api_key=` +
      Config["API_KEY"];
    axios
      .get(CompleteURL)
      .then((res) => dispatch(setMovies([...Movies, ...res.data.results])));
    setPageCounter(PageCounter + 1);
  }
  useEffect(() => {
    getMovies("discover/movie?page=1&api_key=");
  }, []);
  useEffect(() => {
    if (search !== "") {
      const settings = "search/movie?query=" + search + "&api_key=";
      getMovies(settings);
    } else {
      getMovies("discover/movie?page=1&api_key=");
    }
  }, [search]);

  return (
    <StyledMoviesGrid>
      <Container fixed>
        <div className="title">
          <h3>Movies</h3>
        </div>
        {FoundedMovies ? (
          <>
            <div className="movies">
              {Movies.map((e) => (
                <MovieCard
                  key={e.id}
                  id={e.id}
                  poster_path={e.poster_path}
                  original_title={e.original_title}
                  vote_average={e.vote_average}
                />
              ))}
            </div>
            <div className="loadMore">
              <div>
                <Button
                  onClick={() => {
                    GenerateMovies();
                  }}
                  variant="contained"
                >
                  Load More
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="Not_Found">
            <h3>Not Found</h3>
          </div>
        )}
      </Container>
    </StyledMoviesGrid>
  );
};
export default MoviesGrid;
