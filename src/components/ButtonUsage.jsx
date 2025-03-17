import * as React from "react";
import Button from "@mui/material/Button";

export default function ButtonUsage() {
  return (
    <Button
      variant="contained"
      sx={{
        fontWeight: "bold",
        fontSize: "1.25rem",
        bgcolor: "#febb1b",
        color: "white",
        height: "60px",
        width: "100%", 
        maxWidth: "320px", 
        "&:hover": {
          bgcolor: "#e6a817", 
        },
      }}
    >
      Купити зараз
    </Button>
  );
}
