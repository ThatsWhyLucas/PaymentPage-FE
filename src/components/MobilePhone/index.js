import React from "react";

import { Typography } from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const MobileInput = ({ value, onChange, label }) => {
  return (
    <div>
      <Typography variant="h5" component="div" className="mobile_input">
        {label}
      </Typography>
      <PhoneInput fullWidth country={"tt"} value={value} onChange={(phone) => onChange("customerMobile", phone)} />
    </div>
  );
};

export default MobileInput;
