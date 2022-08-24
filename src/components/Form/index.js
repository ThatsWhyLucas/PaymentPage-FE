import React, { useState } from "react";
import { Card, CardContent } from "@mui/material";

import PrincipalGrid from "./PrincipalGrid";
import MobileGrid from "./MobileGrid";
import MobileSummary from "../MobileSummary";

const Form = () => {
  const [price, setPrice] = useState(0);
  return (
    <div style={{ marginTop: "32px" }} className="form_body">
      <MobileSummary subtotal={2500} setPrice={setPrice} />
      <Card sx={{ padding: "40px 40px 16px 40px" }}>
        <CardContent sx={{ padding: "0", width: "100%" }}>
          <PrincipalGrid />
          <MobileGrid price={price} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Form;
