import React, { useState } from "react";

import { Grid, Typography, TextField } from "@mui/material";

const DataGrid = () => {
  const Data = [
    { name: "customerNumber", label: "Customer Number", example: "Ex. Jane Cooper" },
    { name: "customerFirstName", label: "Customer First Name", example: "Ex. Jane Cooper" },
    { name: "customerLastName", label: "Customer Last Name", example: "Ex. Jane Cooper" },
    { name: "propertyAddress", label: "Property Address", example: "Ex. Jane Cooper" },
    { name: "customerEmail", label: "Customer Email", example: "Ex. Jane Cooper" },
    { name: "customerMobile", label: "Customer Mobile Number ", example: "Ex. Jane Cooper" },
  ];

  const [form, setForm] = useState({
    customerNumber: "",
    customerFirstName: "",
    customerLastName: "",
    propertyAddress: "",
    customerEmail: "",
    customerMobile: "",
  });

  const handleInformation = (name, value) => {
    const newForm = { ...form };
    newForm[name] = value;
    setForm(newForm);
  };

  const leftColumn = Data.slice(0, 4);
  const rightColumn = Data.slice(4, 7);
  return (
    <Grid container spacing={"90px"}>
      <Grid item xs={6}>
        {leftColumn.map((element) => (
          <div key={`lf-${element.name}`}>
            <Typography
              variant="h5"
              component="div"
              sx={{ marginBottom: "8px", marginTop: "36px", fontWeight: "700", fontSize: "16px" }}
            >
              {element.label}
            </Typography>
            <TextField
              id={element.name}
              margin="dense"
              onChange={(e) => handleInformation(element.name, e.target.value)}
              fullWidth
              label={form[element.name] === "" ? element.example : " "}
              variant="outlined"
              placeholder={element.example}
              InputLabelProps={{
                shrink: false,
              }}
            />
          </div>
        ))}
      </Grid>
      <Grid item xs={6}>
        {rightColumn.map((element) => (
          <div key={`rg-${element.name}`}>
            <Typography
              variant="h5"
              component="div"
              sx={{ marginBottom: "8px", marginTop: "36px", fontWeight: "700", fontSize: "16px" }}
            >
              {element.label}
            </Typography>
            <TextField
              id={element.name}
              margin="dense"
              onChange={(e) => handleInformation(element.name, e.target.value)}
              fullWidth
              label={form[element.name] === "" ? element.example : " "}
              variant="outlined"
              placeholder={element.example}
              InputLabelProps={{
                shrink: false,
              }}
            />
          </div>
        ))}
      </Grid>
    </Grid>
  );
};

export default DataGrid;
