require("dotenv").config();
const express = require("express");
const cors = require("cors");
const http = require('http')
const stripe = require("stripe")(process.env.STRIPE_API_SECRET_KEY);

// - App config
const app = express();
// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/api/payments/create", async (req, res) => {
  try {
    const total = req.query.total;

    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: "usd",
    });
    console.log(paymentIntent.client_secret);

    // OK - Created
    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).send({ message: "Sorry an error occurred" });
  }
});

const server = http.createServer(app)

server.listen(5000, () =>{
    console.log("server started")
})
