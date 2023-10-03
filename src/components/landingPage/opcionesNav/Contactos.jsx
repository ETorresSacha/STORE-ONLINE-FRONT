import React from "react";

import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";

const Contactos = () => {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  }));
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "white",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "20px",
          margin: "5px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,minmax(150px,1fr))",
            gridGap: "10px",
            gridAutoRows: "minmax(80px, auto)",
            margin: "15px",
          }}
        >
          <TextField id="outlined-basic" label="Nombre" variant="outlined" />
          <TextField id="outlined-basic" label="Apellido" variant="outlined" />
          <TextField id="outlined-basic" label="Correo" variant="outlined" />
          <TextField id="outlined-basic" label="Celular" variant="outlined" />
        </div>

        <TextField
          sx={{ width: "90%" }}
          id="outlined-multiline-flexible"
          label="Mensaje"
          multiline
          rows={4}
          column={2}
        />
        <ColorButton
          sx={{ width: "90%", padding: "15px", margin: "15px" }}
          variant="contained"
        >
          Enviar
        </ColorButton>
      </div>
    </div>
  );
};

export default Contactos;
