import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StyledMoviePage from "./styles/MoviePage.styled";
import { useSelector } from "react-redux";
import Container from "@mui/material/Container";
import axios from "../../API/Api";
const MoviePage = () => {
  const Config = useSelector((state) => state.Config.value);
  let [currentMovie, setCurrentMovie] = useState(null);
  const { id } = useParams();
  function getMovies(REST_OF_URL) {
    const COMPLETE_URL =
      Config["BASE_URL"] + REST_OF_URL + "?api_key=" + Config["API_KEY"];
    axios.get(COMPLETE_URL).then((res) => {
      setCurrentMovie(res.data);
      console.log(currentMovie);
    });
  }
  useEffect(() => {
    getMovies("/movie/" + id);
  }, []);
  return (
    <StyledMoviePage>
      <Container fixed>
        <div className="Movie">
          <div className="title">
            <h3>Movie N-{id}</h3>
          </div>
          {currentMovie ? (
            <div className="mymovie">
              <div className="Image">
                <img
                  src={`https://image.tmdb.org/t/p/original/${
                    currentMovie.backdrop_path !== null
                      ? currentMovie.backdrop_path
                      : currentMovie.poster_path
                  }`}
                  alt=""
                />
              </div>
              <div className="data">
                <div className="title">
                  <h3>{currentMovie.original_title}</h3>
                </div>
                <p>{currentMovie.overview}</p>
                <div className="grided">
                  <div>
                    <b>Genres</b>
                    <ul>
                      {currentMovie.genres.map((e) => (
                        <li key={e.name}>- {e.name}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <b>Adult</b>
                    <span>{currentMovie.adult ? "Yes" : "No"}</span>
                  </div>
                  <div>
                    <b>Budget</b>
                    <span>$ {currentMovie.budget}</span>
                  </div>
                  <div>
                    <b>Production Companies</b>
                    <ul>
                      {currentMovie.production_companies.map((e) => (
                        <li key={e.name}>- {e.name}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="lastLi">
                    <b>Production Countries</b>
                    <ul>
                      {currentMovie.production_countries.map((e) => (
                        <li key={e.name}>- {e.name}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="title" style={{ padding: "20px 0px" }}>
                  <h3>Other Informtions</h3>
                </div>
                <div className="grided">
                  <div>
                    <b>Vote Average</b>
                    <span>{currentMovie.vote_average}/10</span>
                  </div>
                  <div>
                    <b>Vote Count</b>
                    <span>{currentMovie.vote_count}</span>
                  </div>
                  <div>
                    <b>Status</b>
                    <span>{currentMovie.status}</span>
                  </div>
                  <div>
                    <b>Release Date</b>
                    <span>{currentMovie.release_date}</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>Loading</div>
          )}
        </div>
      </Container>
    </StyledMoviePage>
  );
};

export default MoviePage;
