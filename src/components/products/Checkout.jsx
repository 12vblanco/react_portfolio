import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext.jsx";
import CheckoutForm from "./CheckoutForm.jsx";

const initStripe = async () => {
  const res = await axios.get("/api/publishable-key");
  const publishableKey = await res.data.publishable_key;

  return loadStripe(publishableKey);
};

const Checkout = ({ cartItems }) => {
  Checkout.propTypes = {
    cartItems: PropTypes.func,
  };
  const cart = useContext(CartContext);

  const stripePromise = initStripe();
  const [clientSecretSettings, setClientSecretSettings] = useState({
    clientSecret: "",
    loading: true,
  });

  useEffect(() => {
    async function createPaymentIntent() {
      const amount = cart.getTotalCost() * 100;

      const response = await axios.post("/api/create-payment-intent", {
        amount: amount,
      });
      setClientSecretSettings({
        clientSecret: response.data.client_secret,
        loading: false,
      });
    }
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
          {" "}
          <CheckoutForm cartItems={cartItems} />{" "}
        </Elements>
      )}
    </div>
  );
};

export default Checkout;
