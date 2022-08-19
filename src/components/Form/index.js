import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

import DataGrid from "./DataGrid";

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
        </CardContent>
      </Card>
    </div>
  );
};

export default Form;
