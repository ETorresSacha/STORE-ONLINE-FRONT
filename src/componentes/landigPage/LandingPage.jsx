import React from "react";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import imageStore from "../../../image/store.jpg";
import Avatar from "@mui/material/Avatar";
//import Container from "@material-ui/core/Container";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { red } from "@mui/material/colors";
import "./landing.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});

const LandingPage = () => {
  const classes = useStyles();
  return (
    <div className="conteiner-landing">
      <Nav />
      <h1>¡BIENVENIDO A SHOP!</h1>
      <Typography
        variant="h6"
        noWrap
        component="a"
        sx={{
          border: 2,
          color: "white",
          fontFamily: "cursive",
        }}
      >
        Tu tienda favorita en donde encuentras lo que necesitas al alcance de tu
        disponibilidad y a tu disposición de tiempo.
      </Typography>
      <div className="btn-landig">
        <Button className={classes.root}>Ver mas</Button>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
