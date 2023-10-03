import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";

const Contactos = () => {
  function MyFormHelperText() {
    const { focused } = useFormControl() || {};

    const helperText = React.useMemo(() => {
      if (focused) {
        return "";
      }

      return "Ingrese un mensaje";
    }, [focused]);

    return <FormHelperText>{helperText}</FormHelperText>;
  }
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        padding: "20px",
        border: "solid",
        backgroun: "red",
      }}
    >
      <div
        style={{
          margin: "10px",
          background: "blue",
          display: "flex",
          justifyContent: "center",
          width: "50%",
        }}
      >
        <Box
          sx={{
            "& > :not(style)": { m: 1 },
            border: "solid",
            width: "100%",

            //gridAutoRows: "minmax(100px, auto)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "yelow",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            sx={{ width: "40%" }}
            label="Nombre"
            color="secondary"
            focused
          />
          <TextField
            sx={{ width: "40%" }}
            label="Apellido"
            color="secondary"
            focused
          />
          <TextField
            sx={{ width: "40%" }}
            label="Correo"
            color="secondary"
            focused
          />
          <TextField
            sx={{ width: "30%" }}
            label="Celular"
            color="secondary"
            focused
          />
          <FormControl sx={{ width: "70%" }}>
            <OutlinedInput placeholder="Please enter text" />
            <MyFormHelperText />
          </FormControl>
        </Box>
      </div>
    </div>
  );
};

export default Contactos;
