import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const DetailsCard = () => {
  return (
    <div>
      <Card sx={{ padding: "40px 40px 16px 40px" }}>
        <CardContent sx={{ padding: "0" }}>
          <Typography variant="h5" component="div" sx={{ marginBottom: "16px", fontWeight: "700", fontSize: "24px" }}>
            Payments Details
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: "500", fontSize: "16px", width: "70%" }}>
            Cusk-eel Rasbora trout ray New World rivuline. Rattail tailor murray cod sardine; shrimpfish cherry salmon,
            temperate bass whitebait common carp horn shark, "African glass catfish golden loach yellowhead jawfish."
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default DetailsCard;
