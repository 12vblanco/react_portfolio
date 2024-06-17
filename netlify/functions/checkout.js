import express from "express";
import serverless from "serverless-http";
import stripeModule from "stripe";

const stripe = stripeModule(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(express.json());

app.post("/checkout", async (req, res) => {
  console.log(req.body, "request body!!");
  const items = req.body.items;
  let lineItems = [];
  console.log(lineItems, "lineItems!!");

  items.forEach((item) => {
    console.log(item, "item!!");
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: "https://react-portfolio-honours.netlify.app/success",
      cancel_url: "https://react-portfolio-honours.netlify.app/cancel",
    });

    res.setHeader(
      "Access-Control-Allow-Origin",
      "https://react-portfolio-honours.netlify.app/"
    );
    res.setHeader("Access-Control-Allow-Methods", "POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    res.json({
      url: session.url,
    });
  } catch (error) {
    console.error("Stripe Checkout Session creation failed:", error);
    res.status(500).json({ error: error.message });
  }
});

export const handler = serverless(app);
