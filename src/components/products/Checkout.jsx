import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../utils/CartContext";
import CheckoutForm from "./CheckoutForm";

const initStripe = async () => {
  try {
    const res = await axios.get("/api/publishable-key");
    const publishableKey = res.data.publishable_key;
    return loadStripe(publishableKey);
  } catch (error) {
    console.error("Error loading Stripe publishable key:", error);
    return null;
  }
};

const stripePromise = initStripe();

const Checkout = ({ cartItems }) => {
  Checkout.propTypes = {
    cartItems: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string,
        price: PropTypes.number,
      })
    ).isRequired,
  };

  const cart = useContext(CartContext);
  const [clientSecretSettings, setClientSecretSettings] = useState({
    clientSecret: "",
    loading: true,
  });

  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const amount = cart.getTotalCost() * 100;

        const response = await axios.post("/api/create-payment-intent", {
          amount: amount,
        });
        setClientSecretSettings({
          clientSecret: response.data.client_secret,
          loading: false,
        });
      } catch (error) {
        console.error("Error creating payment intent:", error);
        setClientSecretSettings({
          clientSecret: "",
          loading: false,
        });
      }
    };

    createPaymentIntent();
  }, [cart]);

  return (
    <div>
      {clientSecretSettings.loading ? (
        <h1>Loading ...</h1>
      ) : (
        <Elements
          stripe={stripePromise}
          options={{
            clientSecret: clientSecretSettings.clientSecret,
            appearance: { theme: "stripe" },
          }}
        >
          <CheckoutForm cartItems={cartItems} />
        </Elements>
      )}
    </div>
  );
};

export default Checkout;
``;
