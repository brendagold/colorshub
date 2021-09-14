import chroma from "chroma-js";

export default {
    colorBox: {
      width: "20%",
      height: (props) => (props.showingFullPalette ? "25%" : "50%"),
      margin: "0 auto",
      display: "inline-block",
      position: "relative",
      cursor: "pointer",
      marginBottom: "-3.5px",
      "&:hover button": {
        opacity: 1,
      },
    },
    copyText: {
      color: (props) =>
        chroma(props.background).luminance() >= 0.7 ? "black" : "white",
    },
  
    copyName: {
      color: (props) =>
        chroma(props.background).luminance() <= 0.08 ? "white" : "black",
    },
  
    seeMore: {
      color: (props) =>
        chroma(props.background).luminance() >= 0.7 ? "rgba(0,0,0,0.6)" : "white",
      background: "rgba(255, 255, 255, 0.3)",
      position: "absolute",
      right: "0",
      bottom: "0",
      border: "none",
      height: "30px",
      width: "60px",
      textAlign: "center",
      lineHeight: "30px",
      textTransform: "uppercase",
    },
  
    copyButton: {
      color: (props) =>
        chroma(props.background).luminance() >= 0.7 ? "rgba(0,0,0,0.6)" : "white",
      width: "100px",
      height: "30px",
      position: "absolute",
      display: "inline-block",
      top: "50%",
      left: "50%",
      marginLeft: "-50px",
      marginTop: "-15px",
      outline: "none",
      border: "none",
      textAlign: "center",
      background: "rgba(255, 255, 255, 0.3)",
      fontSize: "1rem",
      lineHeight: "30px",
      textTransform: "uppercase",
      textDecoration: "none",
      opacity: 0,
    },
  
    boxContent: {
      position: "absolute",
      width: "100%",
      left: "0",
      bottom: "0",
      padding: "10px",
      color: "black",
      letterSpacing: "1px",
      textTransform: "uppercase",
      fontSize: "12px",
    },
    copyOverlay: {
      opacity: "0",
      zIndex: "0",
      width: "100%",
      height: "100%",
      transition: "transform 0.6s ease-in-out",
      transform: "scale(0.1)",
    },
  
    showOverlay: {
      opacity: "1",
      transform: "scale(50)",
      zIndex: "10",
      position: "absolute",
    },
  
    copyMessage: {
      position: "fixed",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      fontSize: "4rem",
      color: "white",
      opacity: "0",
      transform: "scale(0.1)",
      flexDirection: "column",
      "& h1": {
        fontWeight: "400",
        textShadow: "1px 2px  #000",
        background: "rgba(255, 255, 255, 0.2)",
        width: "100%",
        textAlign: "center",
        marginBottom: "0",
        padding: "1rem",
        textTransform: "uppercase",
      },
  
      "& p": {
        fontSize: "2rem",
      fontWeight: "100",
      }
    },
    showMessage: {
      opacity: "1",
      transform: "scale(1)",
      zIndex: "25",
      transition: "all 0.4s ease-in-out",
      transitionDelay: "0.3s",
    },
    
  };