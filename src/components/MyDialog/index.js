import React from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";
import MyThemeProvider from "../MyThemeProvider";

const MyDialog = (props) => {
  const {
    buttonText,
    title,
    text,
    onSubmit,
  } = props;

  const [open, setOpen] = React.useState(props.open);

  const handleClose = () => {
    if (onSubmit) {
      onSubmit();
    }
    setOpen(false);
  };

  return (
    <div>
      <MyThemeProvider>
        <Dialog open={open} onClose={handleClose} maxWidth="md">
          <DialogTitle>
            {title}
          </DialogTitle>
          <DialogContent style={{ width: '656px', paddingBottom: '0', whiteSpace: 'pre-line' }} >
            <DialogContentText id="alert-dialog-description">
              {text}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={handleClose} style={{ width: '100%', padding: '11px', margin: '16px' }}>{buttonText}</Button>
          </DialogActions>
        </Dialog>
      </MyThemeProvider>
    </div >
  );
};

export default MyDialog;
