import React, { useState } from "react";

import DialogCreditCardInfo from "../../DialogCreditCardInfo";
import DataGrid from "./DataGrid";
import MyThemeProvider from "../../MyThemeProvider";

import { Typography, Box, Grid, Button } from "@mui/material";

const PrincipalGrid = () => {
  const [price, setPrice] = useState(0);

  return (
    <div className="principal_grid">
      <Typography variant="h5" component="div" sx={{ marginBottom: "16px", fontWeight: "700", fontSize: "16px" }}>
        Payments method
      </Typography>
      <DialogCreditCardInfo />
      <Box sx={{ width: "100%" }}>
        <MyThemeProvider>
          <DataGrid setPrice={setPrice} />
        </MyThemeProvider>
      </Box>

      <Grid container spacing={"90px"}>
        <MyThemeProvider>
          <Grid
            item
            xs={6}
            sx={{
              marginTop: "32px",
              fontSize: "16px",
              fontWeight: "700px",
              order: 1,
            }}
          >
            <Button color="primary" fullWidth variant="outlined" sx={{ fontSize: "16px", textTransform: "capitalize" }}>
              Cancel
            </Button>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              marginTop: "32px",
              fontSize: "16px",
              fontWeight: "700px",
              order: 2,
            }}
          >
            <Button fullWidth variant="contained" sx={{ fontSize: "16px", textTransform: "capitalize" }}>
              Pay ${price}
            </Button>
          </Grid>
        </MyThemeProvider>
      </Grid>
    </div>
  );
};

export default PrincipalGrid;
