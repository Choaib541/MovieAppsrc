import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StyledMovieCard from "./styles/MovieCard.styled";
const MovieCard = ({ id, poster_path, original_title, vote_average }) => {
  const [loadingState, setLoadingState] = useState(false);
  const [elevation, setElevation] = useState(3);
  const navigate = useNavigate();
  function HandleNavigate() {
    navigate("/movie/" + id);
  }
  return (
    <StyledMovieCard
      elevation={elevation}
      onMouseOver={() => {
        setElevation(24);
      }}
      onMouseOut={() => {
        setElevation(3);
      }}
      onClick={() => {
        HandleNavigate();
      }}
    >
      <div
        className="image loading"
        style={{
          display: loadingState ? "none" : "flex",
        }}
      >
        <span></span>
      </div>
      <img
        className="image"
        style={{ display: loadingState ? "block" : "none" }}
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        onLoad={() => {
          setLoadingState(true);
        }}
      />
      <span className="movieTitle">{original_title}</span>
      <span className="movieRate">{vote_average}/10</span>
    </StyledMovieCard>
  );
};
export default MovieCard;
