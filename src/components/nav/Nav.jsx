import * as React from "react";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";

import "./nav.css";

const Nav = ({ logo, optionNavigate, search, perfilUsuario }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backdropFilter: "blur(20px)",
        boxShadow: "-moz-initial",
        background: "rgba(203, 175, 189, 0.632)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* LOGO */}
        {logo}

        {/* OPCIONES PARA NAVEGAR */}
        {optionNavigate}

        {/* SEARCH */}
        {search}

        {/* LOGIN DEL USUARIO */}

        {/* PERFIL DEL USUARIO */}
        {perfilUsuario}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
