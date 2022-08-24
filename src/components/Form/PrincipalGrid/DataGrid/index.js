import React, { useState } from "react";

import { Grid } from "@mui/material";

import MobileInput from "../../../MobilePhone";
import Summary from "../../../Summary";
import MyTextField from "../../../MyTextField";
import errorsTexts from "../../../../common/errorsTexts";

const DataGrid = () => {
  const Data = [
    { name: "customerNumber", label: "Customer Number", example: "A1B2C3" },
    { name: "repeatCustomerNumber", label: "Repeat customer Number", example: "A1B2C3" },
    { name: "customerFirstName", label: "Customer First Name", example: "Ex. Jane" },
    { name: "customerLastName", label: "Customer Last Name", example: "Ex. Cooper" },
    { name: "propertyAddress", label: "Property Address", example: "Ex. Jane Cooper" },
    { name: "customerEmail", label: "Customer Email", example: "Ex. Jane Cooper" },
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
    standardValidation: (field, value) => {
      validations.setTouched(field);
      validations.validateRequired(field, value);
    },

    customerNumber: (value) => {
      const field = 'customerNumber';
      validations.standardValidation(field, value);
      // validate HDC spec
      if (value.length !== 16) {
        validations.addError(field, errorsTexts.customerNumberLenghtIssue);
      } else if (!value.match(/[0-9A-Za-z]+/)) {
        validations.addError(field, errorsTexts.customerNumberContentIssue);
      }
    },
    repeatCustomerNumber: (value) => {
      const field = 'repeatCustomerNumber';
      validations.standardValidation(field, value);
      if (value !== form.customerNumber) {
        validations.addError(field, errorsTexts.customerNumberEnterTwice);
      }
    },
    customerFirstName: (value) => {
      const field = 'customerFirstName';
      validations.standardValidation(field, value);

      if (value) {
        if (!value.trim()) {
          validations.addError(field, errorsTexts.onlySpaceForbidden)
        }
      }
    },
    customerLastName: (value) => {
      const field = 'customerLastName';
      validations.standardValidation(field, value);

      if (value) {
        if (!value.trim()) {
          validations.addError(field, errorsTexts.onlySpaceForbidden)
        }
      }
    },
    propertyAddress: (value) => {
      const field = 'propertyAddress';
      validations.standardValidation(field, value);
    },
    customerEmail: (value) => {
      const field = 'customerEmail';
      validations.setTouched(field);

      // source https://regexr.com/3e48o
      if (value) {
        if (!value.match(/^[\w-\.]{1,64}@(?:[\w-]+\.)+[\w-]{2,4}$/)) {
          validations.addError(field, errorsTexts.emailDontMatch)
        }
        if (value.length > 129) {
          validations.addError(field, errorsTexts.maxLengthExceed);
        }
      }
    },
    customerMobile: (value) => {
      const field = 'customerMobile';
      validations.standardValidation(field, value);
    },
  }

  const format = {
    customerFirstName: (value) => {
      return value.substring(0, 49);
    },
    customerLastName: (value) => {
      return value.substring(0, 49);
    },
  }

  const handleInformation = (name, value) => {
    const formattedValue = format[name]?.(value) || value;
    setForm({
      ...form,
      [name]: formattedValue
    });
    validations[name](formattedValue);
  };

  const leftColumn = Data.slice(0, 4);
  const rightColumn = Data.slice(4, 7);
  return (
    <Grid container spacing={{ md: '90px', sm: 0 }}>
      <Grid item xs={12} md={6}>
        {leftColumn.map((element) => (
          <div key={`lf-${element.name}`}>
            <MyTextField element={element} errors={errors} onChange={handleInformation} />
          </div>
        ))}
      </Grid>
      <Grid item xs={12} md={6} >
        {rightColumn.map((element) => (
          <div key={`rg-${element.name}`}>
            <MyTextField element={element} errors={errors} onChange={handleInformation} />
          </div>
        ))}
        <MobileInput value={form["customerMobile"]} label="Customer Mobile Number" onChange={handleInformation} />
        <Summary subtotal="2500.00" fee="45" total="2405.00" />
      </Grid>
    </Grid>
  );
};

export default DataGrid;
