import theme from "../../Theme/theme";
const GlobalStyle = {
  "*": {
    padding: 0,
    margin: 0,
    textDecoration: "none",
    fontFamily: "'Poppins', sans-serif",
  },
  body: {
    background: theme.colors.c60,
  },
  ".title": {
    h3: {
      color: "white",
      width: "fit-content",
      "&::after": {
        content: "''",
        width: "60%",
        background: theme.colors.c10,
        height: "3px",
        display: "block",
      },
    },
  },
};

export default GlobalStyle;
