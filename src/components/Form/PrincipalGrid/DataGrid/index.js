import React, { useState } from "react";

import ErrorIcon from "@mui/icons-material/Error";
import { Grid, Typography, TextField } from "@mui/material";

import MobileInput from "../../../MobilePhone";
import Summary from "../../../Summary";

const DataGrid = ({ setPrice }) => {
  const Data = [
    { name: "customerNumber", label: "Customer Number", example: "A1B2C3", error: false },
    { name: "repeatCustomerNumber", label: "Repeat customer Number", example: "A1B2C3", error: false },
    { name: "customerFirstName", label: "Customer First Name", example: "Ex. Jane", error: false },
    { name: "customerLastName", label: "Customer Last Name", example: "Ex. Cooper", error: false },
    { name: "propertyAddress", label: "Property Address", example: "Ex. Jane Cooper", error: false },
    { name: "customerEmail", label: "Customer Email", example: "Ex. Jane Cooper", error: false },
  ];

  const [form, setForm] = useState({
    customerNumber: "",
    repeatCustomerNumber: "",
    customerFirstName: "",
    customerLastName: "",
    propertyAddress: "",
    customerEmail: "",
    customerMobile: "",
  });

  const [errors, setError] = useState({
    customerNumber: null,
    repeatCustomerNumber: null,
    customerFirstName: null,
    customerLastName: null,
    propertyAddress: null,
    customerEmail: null,
    customerMobile: null,
  });

  const errorsTexts = {
    required: "This field is required",
    customerNumberEnterTwice: "The customer numbers don't match",
    emailDontMatch: "The email provided seems not valid",
  };

  const validations = {
    setTouched: (name) => {
      errors[name] = [];
      setError(errors);
    },
    addError: (field, error) => {
      errors[field].push(error);
      setError(errors);
    },
    validateRequired: (field, value) => {
      if (!value) {
        validations.addError(field, errorsTexts.required);
      }
    },
    standardValidation(field, value) {
      validations.setTouched(field);
      validations.validateRequired(field, value);
    },

    customerNumber: (value) => {
      const field = "customerNumber";
      validations.standardValidation(field, value);
      // validate HDC spec
    },
    repeatCustomerNumber: (value) => {
      const field = "repeatCustomerNumber";
      validations.standardValidation(field, value);
      if (value !== form.customerNumber) {
        validations.addError(field, errorsTexts.customerNumberEnterTwice);
      }
    },
    customerFirstName: (value) => {
      const field = "customerFirstName";
      validations.standardValidation(field, value);
    },
    customerLastName: (value) => {
      const field = "customerLastName";
      validations.standardValidation(field, value);
    },
    propertyAddress: (value) => {
      const field = "propertyAddress";
      validations.standardValidation(field, value);
    },
    customerEmail: (value) => {
      const field = "customerEmail";
      validations.setTouched(field);

      // source https://regexr.com/3e48o
      if (value && !value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        validations.addError(field, errorsTexts.emailDontMatch);
      }

      console.log(errors);
    },
    customerMobile: (value) => {
      const field = "customerMobile";
      validations.standardValidation(field, value);
    },
  };

  const handleInformation = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
    validations[name](value);
  };

  const leftColumn = Data.slice(0, 4);
  const rightColumn = Data.slice(4, 7);
  return (
    <Grid container spacing={{ md: "90px", sm: 0 }}>
      <Grid item xs={12} md={6}>
        {leftColumn.map((element) => (
          <div key={`lf-${element.name}`}>{generateTextField(element, errors, handleInformation)}</div>
        ))}
      </Grid>
      <Grid item xs={12} md={6}>
        {rightColumn.map((element) => (
          <div key={`rg-${element.name}`}>{generateTextField(element, errors, handleInformation)}</div>
        ))}
        <MobileInput value={form["customerMobile"]} label="Customer Mobile Number" onChange={handleInformation} />
        <Summary subtotal={2500} setPrice={setPrice} />
      </Grid>
    </Grid>
  );
};

function generateTextField(element, errors, onChange) {
  return (
    <>
      <Typography
        variant="h5"
        component="div"
        sx={{
          marginBottom: "8px",
          marginTop: "24px",
          fontWeight: "700",
          fontSize: "16px",
        }}
      >
        {element.label}
      </Typography>
      <TextField
        error={errors[element.name] !== null && !!errors[element.name].length}
        helperText={ErrorTextField(errors[element.name])}
        id={element.name}
        margin="dense"
        onChange={({ target: { value } }) => onChange(element.name, value)}
        fullWidth
        variant="outlined"
        placeholder={element.example}
        InputLabelProps={{
          shrink: false,
        }}
      />
    </>
  );
}

function ErrorTextField(elementErrorValue) {
  if (!elementErrorValue || !elementErrorValue.length) return "";

  return (
    <span style={{ position: "relative" }}>
      <span style={{ position: "absolute", left: "-12px", paddingTop: "1px" }}>
        <ErrorIcon />
      </span>
      <span style={{ paddingLeft: "16px" }}>{elementErrorValue.join("\n")}</span>
    </span>
  );
}

export default DataGrid;
