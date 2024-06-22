import express from "express";
import serverless from "serverless-http";
import stripeModule from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY error!!");
}

const stripe = stripeModule(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(express.json());

app.post("/checkout", async (req, res) => {
  const { items } = req.body;

  if (
    !Array.isArray(items) ||
    items.some((item) => !item.id || !item.quantity)
  ) {
    return res.status(400).json({ error: "Request body error" });
  }

  const lineItems = items.map((item) => ({
    price: item.id,
    quantity: item.quantity,
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: "https://react-portfolio-honours.netlify.app/success",
      cancel_url: "https://react-portfolio-honours.netlify.app/cancel",
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Stripe Checkout failed:", error);
    res.status(500).json({ error: "Server Error" });
  }
});

export const handler = serverless(app);
