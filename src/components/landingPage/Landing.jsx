import React from "react";
import Nav from "../nav/Nav";
import "./landing.css";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startOption } from "../../toolkit/slice";
import KeyboardDoubleArrowUpRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowUpRounded";
import Container from "@mui/material/Container";
import imagen from "../../../image/STORE1.png";

// const useStyles = makeStyles({
//   root: {
//     background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
//     border: 0,
//     borderRadius: 3,
//     boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
//     color: "white",
//     height: 48,
//     padding: "0 30px",
//   },
// });

const LandingPage = () => {
  const dispatch = useDispatch();
  const { option } = useSelector((state) => state.clothes);

  //const classes = useStyles();

  useEffect(() => {
    if (option === "Inicio")
      return window.scrollTo({ top: 0, behavior: "smooth" });
    else if (option === "Servicios")
      return window.scrollTo({ top: 745, behavior: "smooth" });
    else if (option === "Nosotros")
      return window.scrollTo({ top: 1490, behavior: "smooth" });
    else if (option === "Contacto")
      return window.scrollTo({ top: 2235, behavior: "smooth" });

    return () => dispatch(startOption(""));
  }, [option]);
  useEffect(() => {}, []);

  return (
    <div className="conteiner">
      <Nav />
      {/* <img className="imagen" src={imagen} alt="imagen"></img> */}
      <section className="conteiner-landing">
        <Nav />
        <div className="conteiner-text">
          <h1 className="title-landing">¡BIENVENIDO A SHOP!</h1>
          <h4 className="h4-landing">
            Tu tienda favorita en donde encuentras lo que necesitas al alcance
            de tu disponibilidad y a tu disposición de tiempo.
          </h4>
        </div>

        <KeyboardDoubleArrowUpRoundedIcon
          fontSize="large"
          sx={{
            background: "red",
            borderRadius: 5,
            position: "absolute",
            left: 600,
            top: 500,
          }}
        />
      </section>
      {/* <div className="btn-landig">
        <Button className={classes.root}>Ver mas</Button>
      </div>
      {/* <section style={{ width: "100%", height: "100vh", background: "gray" }}>
        SERVICIO
      </section>
      <section style={{ width: "100%", height: "100vh", background: "green" }}>
        NOSOTROS
      </section>
      <section style={{ width: "100%", height: "100vh", background: "blue" }}>
        CONTACTO
      </section> */}
    </div>
  );
};

export default LandingPage;

//!FALTA CORREGIR LAS DIMENCIONES DEL LANDING
