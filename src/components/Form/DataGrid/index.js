import React from "react";

import { Grid, Typography, TextField } from "@mui/material";

const DataGrid = () => {
  const Data = [
    { label: "Payments method" },
    { label: "Payments " },
    { label: "Payments asdmethod" },
    { label: "Payments mesadthod" },
    { label: "Payments methasdasdod" },
    { label: "Payments methodsd" },
  ];

  const leftColumn = Data.slice(0, 3);
  const rightColumn = Data.slice(3, 6);
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        {leftColumn.map((element) => (
          <div>
            <Typography
              variant="h5"
              component="div"
              sx={{ marginBottom: "8px", marginTop: "36px", fontWeight: "700", fontSize: "16px" }}
            >
              {element.label}
            </Typography>
            <TextField
              id="outlined-basic"
              margin="dense"
              onChange={(e) => console.log(e.target.value)}
              fullWidth
              label={element.label}
              variant="outlined"
            />
          </div>
        ))}
      </Grid>
      <Grid item xs={6}>
        {rightColumn.map((element) => (
          <div>
            <Typography
              variant="h5"
              component="div"
              sx={{ marginBottom: "8px", marginTop: "36px", fontWeight: "700", fontSize: "16px" }}
            >
              {element.label}
            </Typography>
            <TextField
              id="outlined-basic"
              margin="dense"
              onChange={(e) => console.log(e.target.value)}
              fullWidth
              label={element.label}
              variant="outlined"
            />
          </div>
        ))}
      </Grid>
    </Grid>
  );
};

export default DataGrid;
