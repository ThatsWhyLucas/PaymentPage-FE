import React from "react";
import MyDialog from ".";

const DialogThanks = ({ open, onSubmit }) => {
  return (
    <MyDialog
      title='All its good! Thanks for order :)'
      text={"It was a success.\nThanks for your order, we appreciate our customers."}
      buttonText='Continue'
      onSubmit={onSubmit}
      open={open} />
  );
};

export default DialogThanks;
