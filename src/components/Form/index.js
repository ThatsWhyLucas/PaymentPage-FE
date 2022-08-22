import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Card, CardContent, Typography, Box, Grid, Button } from "@mui/material";

import DataGrid from "./DataGrid";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF7800",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: ["Satoshi"],
  },
});

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
          <Box sx={{ width: "100%" }}>
            <DataGrid />
          </Box>

          <Grid container spacing={"90px"}>
            <ThemeProvider theme={theme}>
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
            </ThemeProvider>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default Form;
