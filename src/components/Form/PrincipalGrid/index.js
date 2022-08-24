import React, { useState } from "react";

import DialogCreditCardInfo from "../../DialogCreditCardInfo";
import DataGrid from "./DataGrid";
import MyThemeProvider from "../../MyThemeProvider";

import { Typography, Box, Grid, Button } from "@mui/material";

const PrincipalGrid = () => {
  const [price, setPrice] = useState(0);

  return (
    <div>
      <Typography variant="h5" component="div" className="grid_title">
        Payments method
      </Typography>
      <DialogCreditCardInfo />
      <Box>
        <MyThemeProvider>
          <DataGrid setPrice={setPrice} />
        </MyThemeProvider>
      </Box>

      <Grid container spacing={"90px"}>
        <MyThemeProvider>
          <Grid item xs={6}>
            <Button color="primary" fullWidth variant="outlined" className="button_grid">
              Cancel
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth variant="contained" className="button_grid">
              Pay ${price}
            </Button>
          </Grid>
        </MyThemeProvider>
      </Grid>
    </div>
  );
};

export default PrincipalGrid;
