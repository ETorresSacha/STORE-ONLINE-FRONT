import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useDispatch, useSelector } from "react-redux";
import "./nav.css";
import Servicio from "./opcionesNav/Servicio";
import { useRef } from "react";
import { startOption } from "../../toolkit/slice";

const pages = ["Inicio", "Servicios", "Nosotros", "Contacto"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Nav = () => {
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //!
  //SCROLL
  const Servicios = useRef();

  const scrollHnadler = (eleRef) => {
    //console.log(eleRef);
    //window.scrollTo({ top: eleRef.current.offsetTop, behavior: "smooth" });
    dispatch(startOption(eleRef));
  };
  //!
  return (
    <div className="conteiner-nav">
      <div>
        <Toolbar disableGutters>
          {/* el menú delplegable */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, mr: 1 }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* logo */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                //flexGrow: 10,
              }}
            >
              <Avatar
                sx={{ p: 0 }}
                alt="Remy Sharp"
                src="../../../image/store.jpg"
              />
            </Typography>
          </Box>

          {/* opciones del nav */}
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 5 }}>
            {pages.map((page) => (
              <Button
                //href={`#${page}`}
                key={page}
                //onClick={handleCloseNavMenu}
                onClick={() => scrollHnadler(page)}
                sx={{ my: 2, display: "block" }}
              >
                {page}
              </Button>
              // <span>
              //   <a href={`#${page}`}>{page}</a>
              // </span>
            ))}
          </Box>

          {/* opciones del nav */}

          <section ref={Servicios}>hola</section>

          {/* perfil */}
          <Box sx={{ mr: 5 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </div>

      {/* secciones para cada opción */}
    </div>
  );
};

export default Nav;
