import React from "react";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Instagram from "@mui/icons-material/Instagram";
import { Box } from "@mui/material";
const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "hsl(335, 100%, 86%)",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "hsl(332, 95%, 26%)",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",

            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <a>Condiciones de uso</a>

          <a>Políticas de Privacidad</a>

          <a>Accesibilidad</a>

          <a>Politicas de Pago</a>
        </div>
        <div style={{ margin: "20px", gap: "45px" }}>
          <FacebookSharpIcon />
          <Instagram />
          <YouTubeIcon />
        </div>
        <div>
          <p className="font-bold text-lg">
            Copyright © {new Date().getFullYear()} STORE ONLINE
          </p>
        </div>
      </div>
    </Box>
  );
};

export default Footer;
