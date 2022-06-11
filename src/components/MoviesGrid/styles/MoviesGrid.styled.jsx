import { styled } from "@mui/material/styles";

const StyledMoviesGrid = styled("section")(({ theme }) => ({
  padding: "30px 0px",
  ".movies": {
    padding: "20px 0px",
    display: "grid",
    gridGap: "15px",
  },
  ".Not_Found": {
    width: "100%",
    color: theme.colors.t10,
    padding: "20px 0px ",
    h3: {
      width: "fit-content",
      "&::before": {
        content: "''",
        height: "3px",
        width: "60%",
        background: theme.colors.c10,
        display: "block",
      },
    },
  },
  ".loadMore": {
    display: "flex",
    justifyContent: "center",
    borderBottom: "1px solid " + theme.colors.t10,
    height: "40px",
    position: "relative",
    div: {
      padding: "0px 10px",
      background: theme.colors.c60,
      position: "absolute",
      margin: "20px 0px 0px 0px",
      button: {},
    },
  },
  "@media (min-width:768px)": {
    ".movies": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  },
  "@media (min-width:992px)": {
    ".movies": {
      gridTemplateColumns: "repeat(4, 1fr)",
    },
  },
}));

export default StyledMoviesGrid;
