import React from "react";
import ErrorIcon from "@mui/icons-material/Error";
import { TextField, Typography } from "@mui/material";

function MyTextField({element, errors, onChange}) {
  return (
    <>
      <Typography
        variant="h5"
        component="div"
        sx={{ marginBottom: "8px", marginTop: "36px", fontWeight: "700", fontSize: "16px" }}
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
  )
}

function ErrorTextField(elementErrorValue) {
  if (!elementErrorValue || !elementErrorValue.length) return '';

  return (
    <span style={{ position: 'relative' }}>
      <span style={{ position: 'absolute', left: '-12px', paddingTop: '1px' }}><ErrorIcon /></span>
      <span style={{ paddingLeft: '16px' }}>{elementErrorValue.join('\n')}</span>
    </span>
  )
}

export default MyTextField;