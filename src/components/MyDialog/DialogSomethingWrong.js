import React from "react";
import MyDialog from ".";

const DialogSomethingWrong = ({ open }) => {
  return (
    <MyDialog
      title='Oops! Something wrong :('
      text={"You misspelled the form.\nPay attention to the selected fields and fill in the information correctly. And you can continue shopping"}
      buttonText='Again'
      open={open} />
  );
};

export default DialogSomethingWrong;
