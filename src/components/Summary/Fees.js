import React from "react";
import { Grid, Typography } from "@mui/material";

function Fees({ fee }) {
  return (
    <div>
      <Grid container spacing={"100px"}>
        <Grid item xs={6} className="fees_grid">
          <Typography variant="h5" className="fees_title" component="div">
            Convenience Fee
          </Typography>
        </Grid>
        <Grid item xs={6} className="fees_grid">
          <Typography variant="h5" className="fees_value" component="div">
            -${fee}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Fees;
