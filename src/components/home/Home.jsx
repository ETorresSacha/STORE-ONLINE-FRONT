import React from "react";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import axios from "axios";
import { useState, useEffect } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import Logo from "../nav/opcionesNav/Logo";
import PerfilUsuario from "../nav/opcionesNav/PerfilUsuario";
import Search from "../nav/opcionesNav/Search";

const Home = () => {
  const [product, setProduct] = useState();

  const productAll = async () => {
    const { data } = await axios("https://fakestoreapi.com/products");
    setProduct(data);
  };

  const imagenPort = [
    {
      id: 2,
      title: "Polos ",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
      id: 3,
      title: "Casacas",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    },
    {
      id: 4,
      title: "Chompas",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    },
    {
      id: 15,
      title: "Poleras",
      image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    },
    {
      id: 16,
      title: "Chompas",
      image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    },
    {
      id: 17,
      title: "Camisas",
      image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    },
  ];

  useEffect(() => {
    productAll();
  }, []);

  const handleLandingPage = () => {};

  return (
    <div
      style={{
        background: "URL('../../../image/unsplash2.jpg')",
        width: "100%",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        justifyContent: "space-around",
      }}
    >
      <div style={{ width: "100%", height: "9%" }}>
        <Nav
          logo={<Logo />}
          perfilUsuario={<PerfilUsuario />}
          search={<Search />}
        />
      </div>

      {/* filtros */}
      <div
        style={{
          width: "100%",
          height: "10%",
          background: "#aa6e6e",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          color: "#ffeded",
        }}
      >
        <Typography>HOMBRE</Typography>
        <Typography>MUJER</Typography>
        <Typography>NIÑO</Typography>
        <TuneIcon />
      </div>

      {/* categorias */}
      <div
        style={{
          width: "100%",
          height: "15%",
          display: "flex",
          gap: "35px",
          justifyContent: "center",
          padding: "25px",

          background: "#ffe9e9",
        }}
      >
        {imagenPort?.map((element, index) => {
          return (
            <Card
              sx={{
                maxWidth: "70px",
                boxShadow:
                  "3px 3px 2px #3d3d3d, 2px 2px 1px #3d3d3d, 0 0 1px #3d3d3d;",
                borderRadius: "350px 350px 350px 0px",
              }}
              key={index}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={element.image}
                  alt="green iguana"
                />
              </CardActionArea>
              <Typography
                sx={{
                  position: "absolute",
                  top: "31%",
                }}
                variant="body2"
                color="text.secondary"
              >
                {element.title}
              </Typography>
            </Card>
          );
        })}
      </div>
      <div
        style={{
          margin: "30px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "32px",
        }}
      >
        {product?.map((element, index) => {
          return (
            <Card
              sx={{
                maxWidth: 250,
                boxShadow:
                  "3px 3px 2px #3d3d3d, 2px 2px 1px #3d3d3d, 0 0 1px #3d3d3d;",
                borderRadius: "10px",
                ///border: "solid #d9d8d8",
              }}
              key={index}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={element.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ fontSize: "15px" }}
                  >
                    {element.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {element.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  VER MAS
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
      <div style={{ width: "100%" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
