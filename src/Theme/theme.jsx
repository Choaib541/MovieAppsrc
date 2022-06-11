const colors = {
  c60: "#0a1929",
  c30: "#202e3c",
  c10: "#7db131",
  t10: "#ffffff",
};

const palette = {
  primary: {
    main: "#7db131",
  },
  secondary: {
    main: "#202e3c",
  },
};

const components = {
  MuiTextField: {
    styleOverrides: {
      root: {
        ".MuiInputLabel-root": { color: "white" },
        input: {
          color: "white",
        },

        fieldset: {
          borderColor: "white !important",
        },
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        background: colors.c30,
        color: "white",
      },
    },
  },
};

const theme = {
  colors: colors,
  palette: palette,
  components: components,
};
export default theme;
