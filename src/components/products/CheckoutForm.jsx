import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import PropTypes from "prop-types";
import { useState } from "react";
import styled from "styled-components";

const CheckoutForm = ({ cartItems }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);
  const [email, setEmail] = useState("");
  const [costumerName, setCostumerName] = useState("");
  const itemIds = cartItems.map((item) => item.id);
  const itemIdsString = itemIds.join(",");
  const isNameValid = (name) => {
    const pattern = /^[a-zA-Z\s`-]+$/;
    return pattern.test(name);
  };

  const isEmailValid = (email) => {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return pattern.test(email);
  };

  const handleNameChange = (e) => {
    setCostumerName(e.target.value);
    if (!isNameValid(e.target.value)) {
      setNameError("Name should only contain alphabets, spaces, and hyphens.");
    } else {
      setNameError(null);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!isEmailValid(e.target.value)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError(null);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isNameValid(costumerName) || !isEmailValid(email)) {
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:4242/success",
        payment_method_data: {
          type: "card",
          billing_details: {
            email: email,
            name: `${costumerName} - Items: ${itemIdsString}`,
          },
        },
      },
    });

    if (error) {
      setErrorMessage(error.message);
    }
  };

  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Label htmlFor="costumerName">Your Name</Label>
      <Input
        type="text"
        value={costumerName}
        onChange={handleNameChange}
        placeholder="Your name"
        required
      />
      {nameError && <Error>{nameError}</Error>}
      <Label htmlFor="email">Your Email</Label>
      <Input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Your email"
        required
      />
      {emailError && <Error>{emailError}</Error>}

      <PaymentElement />
      <ChkButton disabled={!stripe}>Submit</ChkButton>
      {errorMessage && <div>{errorMessage}</div>}
    </StyledForm>
  );
};
CheckoutForm.propTypes = {
  cartItems: PropTypes.func,
};

const StyledForm = styled.form`
  width: 100%;
  max-width: 25rem;
  margin: 0 auto;
`;

const ChkButton = styled.button`
  background-color: var(--bright);
  color: var(--dark);
  padding: 0.6rem 0.8rem;
  border-radius: 1.2rem;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  z-index: 110;
  border: 0.2rem solid var(--dark);
  display: block;
  margin: 0.6rem auto 0.2rem auto;
`;

const Input = styled.input`
  width: 100%;
  height: 45px;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 6px;
  outline: 0;
  border: 1px #e2e2e2 solid;
  text-transform: uppercase;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 6px rgba(0, 0, 0, 0.02);
  filter: none;
  font-family: inherit;
  font-size: 0.93rem;
  font-weight: inherit;
  line-height: inherit;
  vertical-align: middle;
`;

const Label = styled.label`
  margin-bottom: var(--p-spacing1);
  color: rgb(48, 49, 61);
  font-size: 0.93rem;
  transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1),
    opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1);
`;

const Error = styled.p`
  color: var(--red);
  font-size: 0.8rem;
  margin-top: -8px;
  margin-bottom: 10px;
`;

export default CheckoutForm;
