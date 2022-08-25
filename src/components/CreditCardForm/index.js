import React from "react";
import MyTextField from "../MyTextField";
import errorsTexts from "../../common/errorsTexts";

import valid from "card-validator";

function CreditCardForm({ isInvalid, card, setCard }) {
  const [form, setForm] = React.useState(card);
  const [cardType, setCardType] = React.useState("");
  const [lastFour, setLastFour] = React.useState("");

  React.useEffect(() => {
    setForm(card);
  }, card);

  const [errors, setError] = React.useState({
    cardHolderName: null,
    cardNumber: null,
    expiryDate: null,
    cvv: null,
  });

  const hasErrors = () => {
    return (
      !errors.cardHolderName ||
      errors.cardHolderName.length !== 0 ||
      !errors.cardNumber ||
      errors.cardNumber.length !== 0 ||
      !errors.expiryDate ||
      errors.expiryDate.length !== 0 ||
      !errors.cvv ||
      errors.cvv.length !== 0
    );
  };

  const validations = {
    setTouched: (name) => {
      errors[name] = [];
      setError(errors);
    },
    addError: (field, error) => {
      errors[field].push(error);
      setError(errors);
    },
    validateRequired: (field, value) => {
      if (!value) {
        validations.addError(field, errorsTexts.required);
      }
    },
    standardValidation: (field, value) => {
      validations.setTouched(field);
      validations.validateRequired(field, value);
    },
    cardHolderName: (value) => {
      const field = "cardHolderName";
      validations.standardValidation(field, value);
    },
    cardNumber: (value) => {
      const field = "cardNumber";
      validations.standardValidation(field, value);

      if (
        (value.startsWith("3") && value.replace(/ /g, "").length !== 15) ||
        (!value.startsWith("3") && value.replace(/ /g, "").length !== 16)
      ) {
        validations.addError(field, errorsTexts.invalidCCLenght);
      }
    },
    expiryDate: (value) => {
      const field = "expiryDate";
      validations.standardValidation(field, value);
    },
    cvv: (value) => {
      const field = "cvv";
      validations.standardValidation(field, value);

      const lenghtCvv = form.cardNumber.startsWith(3) ? 4 : 3;

      if (value.length !== lenghtCvv) {
        validations.addError(field, errorsTexts.invalidCCLenght);
      }
    },
  };

  const textFields = {
    cardHolderName: {
      name: "cardHolderName",
      label: "Card holder name",
      example: "Ex. Jane Cooper",
      value: form.cardHolderName,
    },
    cardNumber: {
      name: "cardNumber",
      label: "Card number",
      example: "XXXX XXXX XXXX XXXX",
      value: form.cardNumber,
    },
    expiryDate: {
      name: "expiryDate",
      label: "Expiry date",
      example: "10/24",
      value: form.expiryDate,
    },
    cvv: {
      name: "cvv",
      label: "Security code",
      example: "***",
      type: "password",
      value: form.cvv,
    },
  };

  const format = {
    cardNumber(value) {
      const numberValidation = valid.number(value);
      if (numberValidation.card) {
        setCardType(numberValidation.card.type);
      }
      if (value.length >= 12) {
        setLastFour(value.slice(15, 19));
      }
      if (!value) return value;
      if (value.startsWith("3")) {
        const [, g1, g2, g3] = value.match(/([0-9]{1,4}) ?([0-9]{0,6}) ?([0-9]{0,5})/);
        return [g1, g2, g3].join(" ").trim();
      } else {
        return value
          .match(/([0-9]{1,4})/g)
          .join(" ")
          .substr(0, 19);
      }
    },
    expiryDate(value) {
      const matchResult = value.match(/(10|11|12|01|02|03|04|05|06|07|08|09)\/?([0-9]{2})/);
      if (matchResult) {
        const [, month, year] = matchResult;
        return month + "/" + year;
      }
      return value;
    },
    cvv: (value) => {
      return value.substring(0, 4);
    },
  };

  const onChange = (name, value) => {
    const formattedValue = format[name]?.(value) || value;
    setCard({
      ...form,
      [name]: formattedValue,
      ["cardType"]: cardType ? cardType : "",
      ["lastFour"]: lastFour ? lastFour : "",
    });
    validations[name](formattedValue);
    isInvalid(hasErrors());
  };

  return (
    <div>
      <MyTextField element={textFields.cardHolderName} errors={errors} onChange={onChange} />
      <MyTextField
        element={textFields.cardNumber}
        errors={errors}
        onChange={onChange}
        adornment={true}
        cardType={form.cardType}
      />
      <div>
        <div className="credit_text_field">
          <MyTextField element={textFields.expiryDate} errors={errors} onChange={onChange} />
        </div>
        <div className="credit_text_field">
          <MyTextField element={textFields.cvv} errors={errors} onChange={onChange} />
        </div>
      </div>
    </div>
  );
}

export default CreditCardForm;
