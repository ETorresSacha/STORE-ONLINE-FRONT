import React from "react";
import Nav from "../nav/Nav";
import "./landing.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startOption } from "../../toolkit/slice";
import KeyboardDoubleArrowUpRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowUpRounded";
import Button from "@mui/material/Button";
import { useRef } from "react";

const LandingPage = () => {
  const Inicio = useRef();
  const Servicios = useRef();
  const Nosotros = useRef();
  const Contacto = useRef();

  const dispatch = useDispatch();

  const { option } = useSelector((state) => state.clothes);

  // Scroll to section
  useEffect(() => {
    if (option === "Inicio")
      window.scrollTo({
        top: Inicio.current.offsetTop,
        behavior: "smooth",
      });
    if (option === "Servicios")
      window.scrollTo({
        top: Servicios.current.offsetTop,
        behavior: "smooth",
      });
    if (option === "Nosotros")
      window.scrollTo({
        top: Nosotros.current.offsetTop,
        behavior: "smooth",
      });
    if (option === "Contacto")
      window.scrollTo({
        top: Contacto.current.offsetTop,
        behavior: "smooth",
      });

    return () => dispatch(startOption(""));
  }, [option]);

  //SCROLL To Top
  const scrollToTop = () => {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Boton de Scroll TO Top
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 632) {
        setShow(true);
        console.log("estamos aqui");
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Inicio */}
      <section ref={Inicio} className="conteiner-landing">
        <Nav />
        <div className="conteiner-text">
          <h1 className="title-landing">¡BIENVENIDO A SHOP!</h1>
          <h4 className="h4-landing">
            Tu tienda favorita en donde encuentras lo que necesitas al alcance
            de tu disponibilidad y a tu disposición de tiempo.
          </h4>
        </div>
        <div className="btn-landig">
          <Button
            sx={{
              background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
              border: 2,
              borderRadius: 3,
              boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
              color: "white",
              width: 200,
              height: 48,
              padding: "0 30px",
            }}
          >
            Ver mas
          </Button>
        </div>
      </section>

      {/* Opciones del nav */}
      <section
        ref={Servicios}
        style={{ width: "100%", height: "100vh", background: "gray" }}
      >
        SERVICIO
      </section>
      <section
        ref={Nosotros}
        style={{ width: "100%", height: "100vh", background: "green" }}
      >
        NOSOTROS
      </section>
      <section
        ref={Contacto}
        style={{ width: "100%", height: "100vh", background: "blue" }}
      >
        CONTACTO
      </section>

      {/* Boton para volver al Top = 0 */}
      {show && (
        <Button
          onClick={() => scrollToTop()}
          style={{
            position: "fixed",
            right: 50,
            bottom: 50,
            background: "#f0e8e8",
            borderRadius: 40,
          }}
        >
          <KeyboardDoubleArrowUpRoundedIcon
            fontSize="large"
            sx={{ color: "black" }}
          />
        </Button>
      )}
    </div>
  );
};

export default LandingPage;
