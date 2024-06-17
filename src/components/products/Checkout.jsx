import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../utils/CartContext";

const initStripe = async () => {
  const res = await axios.get("/api/publishable-key");
  const publishableKey = res.data.publishable_key;

  return loadStripe(publishableKey);
};

const Checkout = () => {
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
      <Elements
        stripe={stripePromise}
        options={{
          clientSecret: clientSecretSettings.clientSecret,
          appearance: { theme: "stripe" },
        }}
      ></Elements>
    </div>
  );
};
checkout.propTypes = {
  cartItems: PropTypes.func,
};

export default Checkout;
