/* eslint-disable no-undef */
import dotenv from "dotenv";
import Fastify from "fastify";
import Stripe from "stripe";

dotenv.config();

const fastify = Fastify({ logger: true });
const port = 5174;

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2020-08-27",
});

fastify.get("/api/publishable-key", async (request, reply) => {
  try {
    console.log("Fetching publishable key...");
    const publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
    if (!publishableKey) {
      throw new Error("Publishable key not found in environment variables.");
    }
    return { publishable_key: publishableKey };
  } catch (error) {
    console.error("Error fetching publishable key:", error);
    reply.status(500).send({ error: "Internal Server Error" });
  }
});

fastify.post("/api/create-payment-intent", async (request, reply) => {
  const { amount } = request.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "gbp",
      payment_method_types: ["card"],
    });

    return { client_secret: paymentIntent.client_secret };
  } catch (error) {
    reply.send(error);
  }
});

const start = async () => {
  try {
    await fastify.listen(port);

    console.log(`Server listening on http://localhost:${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
