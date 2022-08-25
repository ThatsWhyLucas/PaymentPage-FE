import React from "react";
import ErrorIcon from "@mui/icons-material/Error";
import { TextField, Typography, InputAdornment } from "@mui/material";
import PaymentIcon from "react-payment-icons";

function MyTextField({ element, errors, onChange, adornment = null, cardType = "" }) {
  return (
    <>
      <Typography variant="h5" component="div" className="textField_title">
        {element.label}
      </Typography>
      <TextField
        value={element.value}
        error={errors[element.name] !== null && !!errors[element.name].length}
        helperText={ErrorTextField(errors[element.name])}
        id={element.name}
        margin="dense"
        type={element.type || "text"}
        onChange={({ target: { value } }) => onChange(element.name, value)}
        fullWidth
        variant="outlined"
        placeholder={element.example}
        InputLabelProps={{
          shrink: false,
        }}
        InputProps={{
          startAdornment: adornment ? (
            <InputAdornment position="start">
              <PaymentIcon id={cardType} style={{ margin: 10, width: 24 }} className="payment-icon" />
            </InputAdornment>
          ) : null,
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

export default MyTextField;
