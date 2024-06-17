import cors from "cors";
import express from "express";
import serverless from "serverless-http";
import stripeModule from "stripe";

const stripe = stripeModule("STRIPE_SECRET_KEY");

const app = express();
app.use(cors());
app.use(express.static("public"));
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

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url:
      "https://react-portfolio-honours.netlify.app/.netlify/functions/successPayment",
    cancel_url:
      "https://react-portfolio-honours.netlify.app/.netlify/functions/errorPayment",
  });

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

export const handler = serverless(app);
