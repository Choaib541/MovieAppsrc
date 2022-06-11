import StyledNavBar from "./styles/NavBar.styled";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";

function NavBar({ setSearch }) {
  function HandleSearch(event) {
    let search = event.target.value;
    search = search.replaceAll(" ", "+");
    setSearch(search);
  }
  return (
    <Container fixed>
      <StyledNavBar>
        <div className="brand">
          <Link to="/">
            <h2>OSI Model</h2>
          </Link>
        </div>
        <div className="search">
          <TextField
            id="outlined-basic"
            label="Veuillez entrer un nom pour la recherche..."
            variant="outlined"
            onChange={(event) => {
              HandleSearch(event);
            }}
          />
        </div>
      </StyledNavBar>
    </Container>
  );
}

export default NavBar;
