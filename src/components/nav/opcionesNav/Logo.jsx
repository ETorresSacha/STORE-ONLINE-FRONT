import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

const Logo = () => {
  return (
    <Box
      sx={{
        display: { xs: "flex", md: "flex" },
        margin: 1,
      }}
    >
      <Avatar
        sx={{ flexGrow: 1, p: 0, height: 50, width: 50 }}
        alt="Remy Sharp"
        src="../../../../image/store.jpg"
      />
    </Box>
  );
};

export default Logo;
