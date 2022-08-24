import React from "react";
import { Card, CardContent } from "@mui/material";

import PrincipalGrid from "./PrincipalGrid";
import MobileGrid from "./MobileGrid";

const Form = () => {
  return (
    <div style={{ marginTop: "32px" }} className="form_body">
      <Card></Card>
      <Card sx={{ padding: "40px 40px 16px 40px" }}>
        <CardContent sx={{ padding: "0", width: "100%" }}>
          <PrincipalGrid />
          <MobileGrid />
        </CardContent>
      </Card>
    </div>
  );
};

export default Form;
