import * as React from "react";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";

import "./nav.css";

const Nav = ({ logo, optionNavigate, perfilUsuario }) => {
  return (
    <AppBar
      position="fixed"
      color="secondary"
      sx={{
        backdropFilter: "blur(20px)",
        boxShadow: "-moz-initial",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* LOGO */}
        {logo}

        {/* OPCIONES PARA NAVEGAR */}
        {optionNavigate}

        {/* LOGIN DEL USUARIO */}

        {/* PERFIL DEL USUARIO */}
        {perfilUsuario}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
