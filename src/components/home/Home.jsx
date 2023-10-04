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

const Home = () => {
  const [product, setProduct] = useState();

  const productAll = async () => {
    const { data } = await axios("https://fakestoreapi.com/products");
    setProduct(data);
  };

  useEffect(() => {
    productAll();
  }, []);
  console.log(product);

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
        <Nav />
      </div>
      <div
        style={{
          width: "100%",
          height: "10%",
          background: "#aa6e6e",
        }}
      >
        filtros
      </div>
      <div
        style={{
          width: "100%",
          height: "14%",

          background: "#ffe9e9",
        }}
      >
        VISUALIZAR CATEGORIAS
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
                maxWidth: 345,
                boxShadow: "2px 2px 2px",
                borderRadius: "10px",
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
