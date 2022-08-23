import React from "react";
import { Grid, Typography } from "@mui/material";

function Subtotal({ subtotal }) {
  return (
    <div>
      <Grid container spacing={"100"}>
        <Grid item xs={6} sx={{ fontSize: "16px", fontWeight: "700px" }}>
          <Typography
            variant="h5"
            component="div"
            sx={{ color: "#677489", marginTop: "36px", fontWeight: "700", fontSize: "16px" }}
          >
            Subtotal
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ fontSize: "16px", fontWeight: "700px" }}>
          <Typography variant="h5" component="div" sx={{ marginTop: "36px", fontWeight: "700", fontSize: "16px" }}>
            ${subtotal}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Subtotal;