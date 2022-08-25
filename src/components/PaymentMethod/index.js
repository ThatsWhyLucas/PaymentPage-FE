import React, { useState } from "react";

import { Grid, Radio, Typography } from "@mui/material";
import DialogCreditCardInfo from "../DialogCreditCardInfo";
import Amount from "../Amount";
import PaymentIcon from "react-payment-icons";

const PaymentMethod = ({ subtotal, setSubtotal }) => {
  const [selectedValue, setSelectedValue] = useState("a");
  const [show, setShow] = useState(false);
  const [card, setCard] = useState({
    cardHolderName: "",
    cardNumber: "",
    cardType: "",
    lastFour: "****",
    expiryDate: "",
    cvv: "",
  });
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleModal = () => {
    setShow(!show);
  };

  return (
    <div className="payment_method_container">
      <DialogCreditCardInfo show={show} handleModal={handleModal} card={card} setCard={setCard} />
      <Grid container>
        <Grid item xs={3} className="method_left">
          <div className={selectedValue === "a" ? "method_box selected" : "method_box"}>
            <Grid container>
              <Grid item xs={1} sx={{ marginRight: "16px" }}>
                <Radio
                  checked={selectedValue === "a"}
                  onChange={handleChange}
                  value="a"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
              </Grid>
              <Grid item xs={7} className="cc_number">
                <Typography variant="h5" component="div" className="method_title">
                  **** {card.lastFour}
                </Typography>
                <Typography variant="h5" component="div" className="method_action" onClick={() => handleModal()}>
                  {card.cardType.charAt(0).toUpperCase() + card.cardType.slice(1)}
                  {card.cardType ? "-" : ""} Edit
                </Typography>
              </Grid>
              <Grid item xs={2} sx={{ marginTop: "12px" }}>
                <Typography variant="h5" component="div">
                  <PaymentIcon id={card.cardType} style={{ margin: 10, width: 24 }} className="payment-icon" />
                </Typography>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={3} className="method_left">
          <div className={selectedValue === "b" ? "method_box selected" : "method_box"}>
            <Grid container>
              <Grid item xs={1} sx={{ marginRight: "16px" }}>
                <Radio
                  checked={selectedValue === "b"}
                  onChange={handleChange}
                  value="b"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
              </Grid>
              <Grid item xs={7} className="cc_number">
                <Typography variant="h5" component="div" className="method_title">
                  Cash Payment
                </Typography>
                <Typography variant="h5" component="div" className="method_action">
                  Paywise - Edit
                </Typography>
              </Grid>
              <Grid item xs={2} sx={{ marginTop: "12px" }}>
                <img className="paywise_logo" src={require("../../../public/img/paywise_logo.png")} />
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className={"method_amount"}>
            <Amount subtotal={subtotal} setSubtotal={setSubtotal} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default PaymentMethod;
