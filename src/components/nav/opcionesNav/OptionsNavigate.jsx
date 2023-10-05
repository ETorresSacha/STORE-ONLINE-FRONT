import React from "react";
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
import { startOption } from "../../../toolkit/slice";

const OptionsNavigate = ({ optionsNav }) => {
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  //SCROLL;

  const scrollHnadler = (eleRef) => {
    dispatch(startOption(eleRef));
  };
  return (
    <div>
      {/* Menú desplegable */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
        }}
      >
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
          {optionsNav.map((page) => (
            <MenuItem key={page} onClick={() => scrollHnadler(page)}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>

      {/* opciones del nav */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          mr: 5,
          marginLeft: "auto",
        }}
      >
        {optionsNav.map((page) => (
          <Button
            key={page}
            onClick={() => scrollHnadler(page)}
            sx={{ my: 2, display: "block", color: "white" }}
          >
            {page}
          </Button>
        ))}
      </Box>
    </div>
  );
};

export default OptionsNavigate;
