import React from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MyThemeProvider from "../MyThemeProvider";
import CreditCardForm from "../CreditCardForm";

const DialogCreditCardInfo = ({ handleModal, show, card, setCard }) => {
  return (
    <div>
      <MyThemeProvider>
        <Dialog open={show} onClose={handleModal} maxWidth="md">
          <DialogTitle>
            Payment
            <IconButton
              aria-label="close"
              onClick={handleModal}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent style={{ borderTop: "solid 1px #00000012", width: "656px", paddingBottom: "0" }}>
            <CreditCardForm card={card} setCard={setCard} />
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              onClick={handleModal}
              style={{ width: "100%", padding: "11px", margin: "16px" }}
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </MyThemeProvider>
    </div>
  );
};

export default DialogCreditCardInfo;
