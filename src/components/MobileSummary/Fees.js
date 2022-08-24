import React from "react";
import { Grid, Typography } from "@mui/material";

function Fees({ fee }) {
  return (
    <div>
      <Grid container spacing={"147px"}>
        <Grid item xs={6} sx={{ marginTop: "12px" }}>
          <Typography variant="h5" component="div" sx={{ color: "#677489", fontWeight: "700", fontSize: "14px" }}>
            Convenience Fee
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ marginTop: "12px" }}>
          <Typography variant="h5" component="div" sx={{ fontWeight: "700", fontSize: "14px" }}>
            -${fee}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Fees;
