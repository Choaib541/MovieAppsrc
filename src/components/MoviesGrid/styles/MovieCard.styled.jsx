import { keyframes } from "@mui/system";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const load = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledMovieCard = styled(Paper)(({ theme }) => ({
  display: "grid",
  cursor: "pointer",
  transition: "0.4s",
  gridTemplateColumns: "repeat(2,1fr)",
  alignItems: "center",
  ".image": {
    width: "100%",
    gridColumn: "1/3",
  },
  ".loading": {
    width: "100%",
    minHeight: "400px",
    justifyContent: "center !important",
    alignItems: "center !important",
    span: {
      width: "60px",
      height: "60px",
      border: `4px solid ${theme.colors.c10} `,
      borderTopColor: `transparent`,
      borderRadius: "50%",
      animation: `${load} 1s infinite ease`,
    },
  },
  ".movieTitle": {
    width: "150px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    padding: "10px",
  },
  ".movieRate": {
    padding: "10px",
    textAlign: "end",
  },
}));

export default StyledMovieCard;
