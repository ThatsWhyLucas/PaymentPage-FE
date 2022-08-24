import React from "react";
import { Grid, Typography } from "@mui/material";

function Total({ total }) {
  return (
    <div>
      <Grid container spacing={"100px"}>
        <Grid item xs={6} className="total_grid">
          <Typography variant="h5" component="div" className="total_value">
            Total
          </Typography>
        </Grid>
        <Grid item xs={6} className="total_grid" s>
          <Typography variant="h5" component="div" className="total_value">
            ${total}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Total;
