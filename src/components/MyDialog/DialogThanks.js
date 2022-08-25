import React from "react";
import MyDialog from ".";

const DialogThanks = ({ open }) => {
  const onSubmit = () => {
    window.location.href = 'https://hdc.gov.tt/';
    return null;
  };
  
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
