import React from "react";

import { Typography } from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const MobileInput = ({ value, onChange, label }) => {
  return (
    <div>
      <Typography
        variant="h5"
        component="div"
        sx={{
          marginBottom: "8px",
          marginTop: "24px",
          fontWeight: "700",
          fontSize: "16px",
        }}
      >
        {label}
      </Typography>
      <PhoneInput fullWidth country={"tt"} value={value} onChange={(phone) => onChange("customerMobile", phone)} />
    </div>
  );
};

export default MobileInput;
