import React from "react";

import DialogCreditCardInfo from "../../DialogCreditCardInfo";
import DataGrid from "./DataGrid";
import MyThemeProvider from "../../MyThemeProvider";

import { Typography, Box, Grid, Button, FormControlLabel, Checkbox } from "@mui/material";

const PrincipalGrid = ({ price, setPrice, subtotal, setSubtotal }) => {
  const [disallowPay, setDisallowPay] = React.useState(true);

  return (
    <div>
      <Typography variant="h5" component="div" className="grid_title">
        Payments method
      </Typography>
      <DialogCreditCardInfo />
      <Box>
        <MyThemeProvider>
          <DataGrid price={price} setPrice={setPrice} subtotal={subtotal} setSubtotal={setSubtotal} isInvalid={setDisallowPay} />
        </MyThemeProvider>
      </Box>

      <MyThemeProvider>
        <FormControlLabel
          className="form_checkbox"
          control={<Checkbox defaultChecked />}
          label="Billing address is same as shipping"
        />
      </MyThemeProvider>

      <Grid container spacing={window.innerWidth < 480 ? "0" : "90px"}>
        <MyThemeProvider>
          <Grid item xs={window.innerWidth < 480 ? 12 : 6}>
            <Button color="primary" fullWidth variant="outlined" className="button_grid">
              Cancel
            </Button>
          </Grid>
          <Grid item xs={window.innerWidth < 480 ? 12 : 6}>
            <Button disabled={disallowPay} fullWidth variant="contained" className="button_grid">
              Pay ${price}
            </Button>
          </Grid>
        </MyThemeProvider>
      </Grid>
    </div>
  );
};

export default PrincipalGrid;
