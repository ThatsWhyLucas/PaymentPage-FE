import React from "react";
import MyThemeProvider from '../MyThemeProvider'
import { Card, CardContent, Typography, Box, Grid, Button } from "@mui/material";

import DataGrid from "./DataGrid";
import DialogCreditCardInfo from "../DialogCreditCardInfo";
import DialogSomethingWrong from "../MyDialog/DialogSomethingWrong";
import DialogThanks from "../MyDialog/DialogThanks";

const Form = () => {
  return (
    <div style={{ marginTop: "32px" }}>
      <Card sx={{ padding: "40px 40px 16px 40px" }}>
        <CardContent sx={{ padding: "0", width: "100%" }}>
          <div>
            <Typography variant="h5" component="div" sx={{ marginBottom: "16px", fontWeight: "700", fontSize: "16px" }}>
              Payments method
            </Typography>
          </div>
          <div>
            <DialogSomethingWrong open={false} />
            <DialogThanks open={false} />
            <DialogCreditCardInfo />
          </div>
          <Box sx={{ width: "100%" }}>
            <MyThemeProvider>
              <DataGrid />
            </MyThemeProvider>
          </Box>

          <Grid container spacing={"90px"}>
            <MyThemeProvider>
              <Grid item xs={6} sx={{ marginTop: "32px", fontSize: "16px", fontWeight: "700px" }}>
                <Button
                  color="primary"
                  fullWidth
                  variant="outlined"
                  sx={{ fontSize: "16px", textTransform: "capitalize" }}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item xs={6} sx={{ marginTop: "32px", fontSize: "16px", fontWeight: "700px" }}>
                <Button fullWidth variant="contained" sx={{ fontSize: "16px", textTransform: "capitalize" }}>
                  Pay $2405.00
                </Button>
              </Grid>
            </MyThemeProvider>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default Form;
