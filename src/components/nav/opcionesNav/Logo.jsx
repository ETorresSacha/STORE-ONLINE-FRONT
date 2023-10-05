import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: { xs: "flex", md: "flex" },
        margin: 1,
        cursor: "pointer",
      }}
    >
      <Avatar
        sx={{ flexGrow: 1, p: 0, height: 50, width: 50 }}
        alt="Remy Sharp"
        src="../../../../image/store.jpg"
        onClick={() => navigate(`/`)}
      />
    </Box>
  );
};

export default Logo;
