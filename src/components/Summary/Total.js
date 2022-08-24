import React from "react";
import { Grid, Typography } from "@mui/material";

function Total({ total }) {
  return (
    <div>
      <Grid container spacing={"100px"}>
        <Grid item xs={6} sx={{ marginTop: "12px" }}>
          <Typography variant="h5" component="div" sx={{ fontWeight: "700", fontSize: "16px" }}>
            Total
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ marginTop: "12px" }}>
          <Typography variant="h5" component="div" sx={{ fontWeight: "700", fontSize: "16px" }}>
            ${total}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Total;
