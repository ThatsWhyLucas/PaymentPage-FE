import React from "react";
import { Grid, Typography } from "@mui/material";

function Subtotal({ subtotal }) {
  return (
    <div>
      <Grid container spacing={"160px"}>
        <Grid item xs={6}>
          <Typography
            variant="h5"
            component="div"
            sx={{ color: "#677489", marginTop: "36px", fontWeight: "700", fontSize: "14px" }}
          >
            Subtotal
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h5" component="div" sx={{ marginTop: "36px", fontWeight: "700", fontSize: "14px" }}>
            ${subtotal}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Subtotal;
