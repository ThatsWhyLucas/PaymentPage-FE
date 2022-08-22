import React from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, IconButton, Typography, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MyThemeProvider from "../MyThemeProvider";

const DialogCreditCardInfo = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // React.useEffect(() => setOpen(true));

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
            <Typography
              variant="h5"
              component="div"
              sx={{ marginBottom: "0px", marginTop: "24px", fontWeight: "700", fontSize: "16px" }}
            >
              Card holder name
            </Typography>
            <TextField
              autoFocus
              margin="dense"
              id="cardHolderName"
              type="text"
              fullWidth
              variant="outlined"
              onChange={(e) => { }}
              placeholder="Ex. Jane Cooper"
              InputLabelProps={{
                shrink: false,
              }}
            />
            <Typography
              variant="h5"
              component="div"
              sx={{ marginBottom: "0px", marginTop: "24px", fontWeight: "700", fontSize: "16px" }}
            >
              Card number
            </Typography>
            <TextField
              margin="dense"
              id="cardNumber"
              type="number"
              fullWidth
              variant="outlined"
              placeholder="XXXX XXXX XXXX XXXX"
              onChange={(e) => { }}
              InputLabelProps={{
                shrink: false,
              }}
            />

            <div>
              <div style={{ width: '292px', display: 'inline-block', marginRight: '24px' }}>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ marginBottom: "0px", marginTop: "24px", fontWeight: "700", fontSize: "16px", width: '90%' }}
                >
                  Expiry date
                </Typography>
                <TextField
                  style={{ width: '292px' }}
                  margin="dense"
                  id="expiryDate"
                  type=""
                  fullWidth
                  variant="outlined"
                  placeholder="10/24"
                  onChange={(e) => { }}
                  InputLabelProps={{
                    shrink: false,
                  }}
                />
              </div>
              <div style={{ width: '292px%', display: 'inline-block' }}>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ marginBottom: "0px", marginTop: "24px", fontWeight: "700", fontSize: "16px", width: '90%' }}
                >
                  Security code
                </Typography>
                <TextField
                  style={{ width: '292px' }}
                  margin="dense"
                  id="cvv"
                  type="password"
                  fullWidth
                  variant="outlined"
                  placeholder="***"
                  onChange={(e) => { }}
                  InputLabelProps={{
                    shrink: false,
                  }}
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
