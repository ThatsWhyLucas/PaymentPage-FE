import React, { useState } from "react";
import { Card, CardContent } from "@mui/material";

import PrincipalGrid from "./PrincipalGrid";
import MenuToggler from "../MenuToggler";

const Form = () => {
  const [price, setPrice] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  return (
    <div style={{ marginTop: "32px" }}>
      <MenuToggler price={price} setPrice={setPrice} subtotal={subtotal} setSubtotal={setSubtotal} />
      <Card className="form_card">
        <CardContent className="form_content">
          <PrincipalGrid setPrice={setPrice} price={price} subtotal={subtotal} setSubtotal={setSubtotal} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Form;
