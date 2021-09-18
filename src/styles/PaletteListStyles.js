import sizes from "./sizes";
import bg from "./bg.svg"

export default {
  root: {
    backgroundColor: "#0F09AA",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundImage: `url(${bg})`,
    overflow: "scroll",
    overflowX: "hidden"
  },

  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("xl")]: {
      width: "80%"
    },
    [sizes.down("xl")]: {
      width: "70%"
    }
  },

  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    "& a": {
      color: "white",
      textDecoration: "none",
      backgroundColor: "grey",
      padding: "3px 6px"
    },
  },

  palettes: {
    boxSizing: "borderbox",
    display: "grid",
    width: "100%",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "1.5rem",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2, 50%)"
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "0.5rem"
    },
    [sizes.down("sm")]: {
     
      gridGap: "0.1rem"
    },
  },
};
