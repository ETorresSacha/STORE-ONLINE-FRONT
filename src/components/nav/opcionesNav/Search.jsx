import * as React from "react";
import TextField from "@mui/material/TextField";

const Search = () => {
  return (
    <div>
      <TextField
        label="Buscar"
        sx={{
          margin: "10px",
          width: "90%",
          background: "white",
          borderRadius: "5px",
        }}
      />
    </div>
  );
};

export default Search;
