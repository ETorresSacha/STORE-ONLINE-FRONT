import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 350,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

const images = [
  {
    url: "../../../../image/imagen-nosotros.jpg",
    title: "Nosotros",
    width: "25%",
  },
  {
    url: "../../../../image/mision.jpg",
    title: "Misión",
    width: "25%",
  },
  {
    url: "../../../../image/iconos-vision.jpg",
    title: "Visión",
    width: "25%",
  },
  {
    url: "../../../../image/VALORES-min.png",
    title: "Valores",
    width: "25%",
  },
];

const SobreNosotros = () => {
  const description = [
    {
      title: "Nosotros",
      contexto:
        "Bienvenidos a Store, tu destino en línea para productos de alta calidad y servicio excepcional. Fundada en 2020, nuestra tienda nació de una pasión por la moda. Desde entonces, hemos trabajado incansablemente para ofrecer a nuestros clientes una experiencia de compra única y satisfactoria.",
    },
    {
      title: "Misión",
      contexto:
        "En STORE, nuestra misión es simple pero poderosa: ofrecer a nuestros clientes productos de alta calidad que mejoren sus vidas. Estamos comprometidos en proporcionar una selección cuidadosamente curada de productos que inspiren, solucionen problemas y aporten alegría a tu día a día. Trabajamos incansablemente para ser tu fuente confiable de productos excepcionales y un servicio al cliente incomparable.",
    },
    {
      title: "Visión",
      contexto:
        " En STORE, nuestra misión es simple pero poderosa: ofrecer a nuestros clientes productos de alta calidad que mejoren sus vidas. Estamos comprometidos en proporcionar una selección cuidadosamente curada de productos que inspiren, solucionen problemas y aporten alegría a tu día a día. Trabajamos incansablemente para ser tu fuente confiable de productos excepcionales y un servicio al cliente incomparable.",
    },
    {
      title: "Valores",
      contexto:
        " En el corazón de todo lo que hacemos se encuentran nuestros valores fundamentales:",
      items: [
        {
          valor: "Calidad",
          texto:
            "Creemos en la excelencia y nos esforzamos por ofrecer productos que cumplan y superen sus expectativas.",
        },
        {
          valor: "Pasión",
          texto:
            "Estamos apasionados por lo que hacemos y por las comunidades a las que servimos.",
        },
        {
          valor: "Innovación",
          texto: "Buscamos constantemente nuevas formas de mejorar y crecer.",
        },
        {
          valor: "Compromiso",
          texto: "Compromiso: Tu satisfacción es nuestra máxima prioridad.",
        },
      ],
    },
  ];
  const [estado, setEstado] = React.useState("");
  const handleClick = (element) => {
    setEstado(element);
  };

  const MostrarContenido = () => {
    const result = description.filter((ele) => ele.title === estado);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          padding: "25px",
          textAlign: "justify",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "35px",
          }}
        >
          {result[0]?.title}
        </h2>
        <p>{result[0]?.contexto}</p>
        <div>
          {!result[0]?.items
            ? ""
            : result[0]?.items.map((element) => {
                return (
                  <li style={{ display: "flex", margin: "5px", width: "100%" }}>
                    <h3 style={{ fontSize: "16px" }}>{element.valor}:</h3>
                    {element.texto}
                  </li>
                );
              })}
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "space-around",
      }}
    >
      <div>
        <Box sx={{ width: "100%" }}>
          {images.map((image) => (
            <ImageButton
              focusRipple
              key={image.title}
              style={{
                width: image.width,
              }}
            >
              <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  sx={{
                    position: "relative",
                    p: 4,
                    pt: 2,
                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                  }}
                  onClick={() => handleClick(image.title)}
                >
                  {image.title}
                  <ImageMarked className="MuiImageMarked-root" />
                </Typography>
              </Image>
            </ImageButton>
          ))}
        </Box>
      </div>

      <div>
        <MostrarContenido />
      </div>
    </div>
  );
};

export default SobreNosotros;
//!FALTA MEJORAR EN ESTILOS
