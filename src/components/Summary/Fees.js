import React from "react";
import { Grid, Typography } from "@mui/material";

function Fees({ fee }) {
  return (
    <div>
      <Grid container>
        <Grid item xs={9} className="fees_grid">
          <Typography variant="h5" className="fees_title" component="div">
            Convenience Fee
          </Typography>
        </Grid>
        <Grid item xs={3} className="fees_grid">
          <Typography variant="h5" className="fees_value" component="div">
            -${fee}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Fees;
