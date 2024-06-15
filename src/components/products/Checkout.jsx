import { loadStripe } from "@stripe/stripe-js";
import styled from "styled-components";

const stripePromise = loadStripe(
  "pk_test_51HqgwdGKpDMhyEuL11A63hDc42CNdjZbMH93xDPIumVyYlgGe5byVF9rXhgW0rs64r0uaDjQUqlwOUDXrbTZy9nx00cyCIwiBm"
);

const callApi = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch("/api/stripe", {
      method: "POST",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const session = await response.json();
    console.log("Session ID:", session.id);

    const stripe = await stripePromise;
    const result = await stripe.redirectToCheckout({ sessionId: session.id });

    if (result.error) {
      alert(result.error.message);
    }
  } catch (err) {
    console.error("Error:", err);
  }
};

const Checkout = () => {
  return (
    <form onSubmit={callApi}>
      <ChkButton>Checkout</ChkButton>
    </form>
  );
};

const ChkButton = styled.button`
  background-color: #fff;
  color: var(--color-secondary);
  padding: 10px 16px;
  border-radius: 1.2rem;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  z-index: 110;
  border: 0.2rem solid var(--color-secondary);
`;

export default Checkout;
