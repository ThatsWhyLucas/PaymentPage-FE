import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const DetailsCard = () => {
  return (
    <div>
      <Card className="detailsCard">
        <CardContent className="detailsCard_content">
          <Typography variant="h5" component="div" className="detailsCard_title">
            Payments Details
          </Typography>
          <Typography variant="body1" className="detailsCard_body">
            Cusk-eel Rasbora trout ray New World rivuline. Rattail tailor murray cod sardine; shrimpfish cherry salmon,
            temperate bass whitebait common carp horn shark, "African glass catfish golden loach yellowhead jawfish."
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default DetailsCard;
