import { styled } from "@mui/material/styles";

const StyledNavBar = styled("nav")(({ theme }) => ({
  background: theme.colors.c60,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "20px 0px",
  ".brand": {
    a: {
      color: "white",
      fontWeight: 600,
    },
  },
  ".search": {
    display: "flex",
    alignItems: "stretch",
  },
}));

export default StyledNavBar;
