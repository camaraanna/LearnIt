const express = require("express");
const cors = require("cors");
const stripe = require("stripe");

const app = express();
const corsOptions = {
  origin: "http://localhost:3000", // We update with your React application's URL.
};

app.use(cors(corsOptions));
app.use(express.static("public"));
app.use(express.json());

app.post("/api/checkout", async (req, res) => {
  try {
    const items = req.body.items;
    let lineItems = [];

    items.forEach((item) => {
      lineItems.puch({
        price: item.id,
        quantity: item.quantity,
      });
    });

    const session = await stripe.checkout.session.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:3000/success", // "We update with your React application's success URL
      cancel_url: "http://localhost:3000/cancel", //We update with your React application's cancellation URL
    });
    res.json({ url: session.url });
  } catch (error) {
    console.error("Server error", error);
    resizeTo.status(500).json({ error: "An internal server error has occurred." });
  }
});

const port = 400;
app.listen(port, () => console.log(`The server is running on port.${port}`));
