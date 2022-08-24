import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

import PrincipalGrid from "./PrincipalGrid";

const MenuToggler = ({ section_title, card_title }) => {
  return (
    <div>
      <Typography variant="h3" component="div" className="menu_toggler_section">
        {section_title}
      </Typography>

      <Card>
        <CardContent className="form_content">
          <Grid container>
            <Grid item xs={10}>
              <Typography variant="h5" component="div" className="menu_toggler_title">
                {card_title}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <div className="arrow_top"></div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

const Form = () => {
  return (
    <div style={{ marginTop: "32px" }}>
      <MenuToggler section_title="Payment Details" card_title="Payment" />
      <Card className="form_card">
        <CardContent className="form_content">
          <PrincipalGrid />
        </CardContent>
      </Card>
    </div>
  );
};

export default Form;
