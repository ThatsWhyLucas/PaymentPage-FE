import React from "react";
import { Grid, Typography } from "@mui/material";

function Fees({ fee }) {
  return (
    <div>
      <Grid container spacing={"100px"}>
        <Grid item xs={6} sx={{ marginTop: "12px", fontSize: "16px", fontWeight: "700px" }}>
          <Typography variant="h5" component="div" sx={{ color: "#677489", fontWeight: "700", fontSize: "16px" }}>
            Convenience Fee
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ marginTop: "12px", fontSize: "16px", fontWeight: "700px" }}>
          <Typography variant="h5" component="div" sx={{ fontWeight: "700", fontSize: "16px" }}>
            -${fee}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Fees;