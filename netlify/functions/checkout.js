import cors from "cors";
import express from "express";
import serverless from "serverless-http";
import stripeModule from "stripe";

const stripe = stripeModule(
  "sk_test_51HqgwdGKpDMhyEuLY42Q4cG9H8B5khHRskna4OXNxZrDwSWUJ0G0RdfzFVqgZ18IsGJhNmc0fU0pBmBtqu3cvt8s00RdvEXKtF"
);

const app = express();
const corsOptions = {
  origin: "https://react-portfolio-honours.netlify.app",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.get("/checkout", (req, res) => {
  res.json({ message: "CORS enabled for all origins!" });
});
app.listen(4000, () => {
  console.log("Server running on port 4000");
});
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
