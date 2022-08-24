import React from "react";
import { Grid, Typography } from "@mui/material";

function Subtotal({ subtotal }) {
  return (
    <div>
      <Grid container spacing={"100"}>
        <Grid item xs={6} sx={{ marginTop: "12px" }}>
          <Typography variant="h5" component="div" sx={{ color: "#677489", fontWeight: "700", fontSize: "16px" }}>
            Subtotal
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ marginTop: "12px" }}>
          <Typography variant="h5" component="div" sx={{ fontWeight: "700", fontSize: "16px" }}>
            ${subtotal}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Subtotal;
