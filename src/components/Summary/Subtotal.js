import React from "react";
import { Grid, Typography } from "@mui/material";

function Subtotal({ subtotal }) {
  return (
    <div>
      <Grid container>
        <Grid item xs={9} className="subtotal_grid">
          <Typography variant="h5" component="div" className="subtotal_title">
            Subtotal
          </Typography>
        </Grid>
        <Grid item xs={3} className="subtotal_grid">
          <Typography variant="h5" component="div" className="subtotal_value">
            ${subtotal}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Subtotal;
