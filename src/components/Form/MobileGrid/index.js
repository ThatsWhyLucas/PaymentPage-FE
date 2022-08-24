import React from "react";

import DialogCreditCardInfo from "../../DialogCreditCardInfo";
import DataGrid from "./DataGrid";
import MyThemeProvider from "../../MyThemeProvider";

import { Typography, Box, Grid, Button, FormControlLabel, Checkbox } from "@mui/material";

const MobileGrid = ({ price }) => {
  return (
    <div className="mobile_grid">
      <Typography variant="h5" component="div" sx={{ marginBottom: "14px", fontWeight: "700", fontSize: "16px" }}>
        Payments method
      </Typography>
      <DialogCreditCardInfo />
      <Box sx={{ width: "100%" }}>
        <MyThemeProvider>
          <DataGrid />
        </MyThemeProvider>
      </Box>

      <Grid container spacing={"0px"}>
        <MyThemeProvider>
          <FormControlLabel
            sx={{ marginTop: "48px", color: "#677489" }}
            control={<Checkbox defaultChecked />}
            label="Billing address is same as shipping"
          />

          <Grid
            item
            xs={12}
            sx={{
              marginTop: "16px",
              fontSize: "16px",
              fontWeight: "700px",
            }}
          >
            <Button fullWidth variant="contained" sx={{ fontSize: "16px", textTransform: "capitalize" }}>
              Pay ${price}
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              marginTop: "8px",
              fontSize: "16px",
              fontWeight: "700px",
            }}
          >
            <Button color="primary" fullWidth variant="outlined" sx={{ fontSize: "16px", textTransform: "capitalize" }}>
              Cancel
            </Button>
          </Grid>
        </MyThemeProvider>
      </Grid>
    </div>
  );
};

export default MobileGrid;
