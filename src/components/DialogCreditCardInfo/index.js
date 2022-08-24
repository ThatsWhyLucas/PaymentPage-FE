import React from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MyThemeProvider from "../MyThemeProvider";
import MyTextField from "../MyTextField";
import errorsTexts from "../../common/errorsTexts";

const DialogCreditCardInfo = () => {
  const [open, setOpen] = React.useState(false);

  const [form, setForm] = React.useState({
    cardHolderName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const [errors, setError] = React.useState({
    cardHolderName: null,
    cardNumber: null,
    expiryDate: null,
    cvv: null,
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
    cardHolderName: (value) => {
      const field = 'cardHolderName';
      validations.standardValidation(field, value);
    },
    cardNumber: (value) => {
      const field = 'cardNumber';
      validations.standardValidation(field, value);

      if (
        value.startsWith('3') && value.replace(/ /g, '').length !== 15
        || !value.startsWith('3') && value.replace(/ /g, '').length !== 16
      ) {
        validations.addError(field, errorsTexts.invalidCCLenght)
      }
    },
    expiryDate: (value) => {
      const field = 'expiryDate';
      validations.standardValidation(field, value);

    },
    cvv: (value) => {
      const field = 'cvv';
      validations.standardValidation(field, value);

      const lenghtCvv = form.cardNumber.startsWith(3) ? 4 : 3;

      if (value.length !== lenghtCvv) {
        validations.addError(field, errorsTexts.invalidCCLenght);
      }
    },
  }

  const textFields = {
    cardHolderName: {
      name: "cardHolderName",
      label: "Card holder name",
      example: "Ex. Jane Cooper",
      value: form.cardHolderName,
    },
    cardNumber: {
      name: "cardNumber",
      label: "Card number",
      example: "XXXX XXXX XXXX XXXX",
      value: form.cardNumber,
    },
    expiryDate: {
      name: "expiryDate",
      label: "Expiry date",
      example: "10/24",
      value: form.expiryDate,
    },
    cvv: {
      name: "cvv",
      label: "Security code",
      example: "***",
      type: 'password',
      value: form.cvv,
    },
  };

  const format = {
    cardNumber(value) {
      if (!value) return value;
      if (value.startsWith('3')) {
        const [, g1, g2, g3] = value.match(/([0-9]{1,4}) ?([0-9]{0,6}) ?([0-9]{0,5})/);
        return [g1, g2, g3].join(' ').trim();
      } else {
        return value.match(/([0-9]{1,4})/g).join(' ').substr(0, 19);
      }
    },
    expiryDate(value) {
      const matchResult = value.match(/(10|11|12|01|02|03|04|05|06|07|08|09)\/?([0-9]{2})/);
      if (matchResult) {
        const [, month, year] = matchResult;
        return month + '/' + year;
      }
      return value;
    },
    cvv: (value) => {
      return value.substring(0, 4);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChange = (name, value) => {
    const formattedValue = format[name]?.(value) || value;
    setForm({
      ...form,
      [name]: formattedValue
    });
    validations[name](formattedValue);
  };

  return (
    <div>
      <MyThemeProvider>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open CC dialog
        </Button>
        <Dialog open={open} onClose={handleClose} maxWidth="md">
          <DialogTitle>
            Payment
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent style={{ borderTop: 'solid 1px #00000012', width: '656px', paddingBottom: '0' }} >
            <MyTextField
              element={textFields.cardHolderName}
              errors={errors}
              onChange={onChange}
            />
            <MyTextField
              element={textFields.cardNumber}
              errors={errors}
              onChange={onChange}
            />
            <div>
              <div style={{ width: '292px', display: 'inline-block', marginRight: '24px' }}>
                <MyTextField
                  element={textFields.expiryDate}
                  errors={errors}
                  onChange={onChange}
                />
              </div>
              <div style={{ width: '292px', display: 'inline-block' }}>
                <MyTextField
                  element={textFields.cvv}
                  errors={errors}
                  onChange={onChange}
                />
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={handleClose} style={{ width: '100%', padding: '11px', margin: '16px' }}>Save</Button>
          </DialogActions>
        </Dialog>
      </MyThemeProvider>
    </div >
  );
};

export default DialogCreditCardInfo;
