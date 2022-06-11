import { styled } from "@mui/material/styles";

const StyledMoviePage = styled("div")(({ theme }) => ({
  ".Movie": {
    padding: "30px 0px",
    "*": {
      color: theme.colors.t10,
      padding: 0,
      textAlign: "start",
      listStyleType: "none",
    },
    ".mymovie": {
      display: "grid",
      padding: "20px 0px",
      ".Image": {
        img: {
          margin: "20px 0px",
          width: "100%",
        },
      },
      ".data": {
        p: {
          padding: "20px 0px",
        },
        ".grided": {
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          div: {
            b: {
              background: theme.colors.c10,
              padding: "0px 0px 0px 5px",
              alignItems: "center",
              height: "35px",
              display: "flex",
              marginBottom: "10px",
            },
            span: {
              display: "block",
              marginBottom: "10px",
            },
            li: {
              margin: "0px 0px 10px 0px",
            },
          },
          ".lastLi": {
            gridColumn: "1/3",
          },
        },
      },
    },
  },
  "@media (min-width:992px)": {
    ".mymovie": {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gridGap: "20px",
      ".Image": {
        img: {
          height: "100%",
          display: "block",
          width: "100%",
          objectFit: "cover",
          objectPosition: "center",
        },
      },
    },
  },
}));

export default StyledMoviePage;
