import React, { useState } from "react";
import { Card, CardContent } from "@mui/material";

import PrincipalGrid from "./PrincipalGrid";

const Form = () => {
  return (
    <div style={{ marginTop: "32px" }}>
      <Card className="form_card">
        <CardContent className="form_content">
          <PrincipalGrid />
        </CardContent>
      </Card>
    </div>
  );
};

export default Form;
