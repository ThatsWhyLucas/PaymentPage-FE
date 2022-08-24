import React, { useState } from "react";
import { Card, CardContent, Typography, Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import PrincipalGrid from "./PrincipalGrid";

import Summary from "../Summary";

const MenuToggler = ({ price, setPrice, subtotal }) => {
  const [expanded, setExpanded] = useState(false);
  const [expandSummary, setExpandSumarry] = useState(false);

  return (
    <div className="menu_toggler">
      <Accordion expanded={expandSummary} onChange={() => setExpandSumarry(!expandSummary)}>
        <AccordionSummary className="accordion_summary" expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" component="div" className="menu_toggler_title">
            Show Order Summary
          </Typography>
          <Typography variant="h5" component="div" className="menu_toggler_title">
            ${price}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Summary subtotal={subtotal} setPrice={setPrice} />
        </AccordionDetails>
      </Accordion>

      <Typography variant="h3" component="div" className="menu_toggler_section">
        Payment Details
      </Typography>
      <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
        <AccordionSummary className="accordion_summary" expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" component="div" className="menu_toggler_title">
            Payment
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <PrincipalGrid setPrice={setPrice} price={price} subtotal={subtotal} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

const Form = () => {
  const [price, setPrice] = useState(0);
  const [subtotal, setSubtotal] = useState(100);
  return (
    <div style={{ marginTop: "32px" }}>
      <MenuToggler price={price} setPrice={setPrice} subtotal={subtotal} />
      <Card className="form_card">
        <CardContent className="form_content">
          <PrincipalGrid setPrice={setPrice} price={price} subtotal={subtotal} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Form;
