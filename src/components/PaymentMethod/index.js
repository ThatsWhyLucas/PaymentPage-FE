import React, { useState } from "react";

import { Grid, Radio, Typography } from "@mui/material";
import DialogCreditCardInfo from "../DialogCreditCardInfo";
import Amount from "../Amount";

const PaymentMethod = ({ subtotal, setSubtotal }) => {
  const [selectedValue, setSelectedValue] = useState("a");
  const [show, setShow] = useState(false);
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleModal = () => {
    setShow(!show);
  };

  return (
    <div className="payment_method_container">
      <DialogCreditCardInfo show={show} handleModal={handleModal} />
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
                  **** 8304
                </Typography>
                <Typography variant="h5" component="div" className="method_action" onClick={() => handleModal()}>
                  Visa - Edit
                </Typography>
              </Grid>
              <Grid item xs={2} sx={{ marginTop: "12px" }}>
                <Typography variant="h5" component="div">
                  visa
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
                <Typography variant="h5" component="div">
                  paywise
                </Typography>
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
