require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const { Configuration, PlaidApi, PlaidEnvironments } = require("plaid");

const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      "PLAID-CLIENT-ID": process.env.PLAID_CLIENT_ID,
      "PLAID-SECRET": process.env.PLAID_SECRET,
    },
  },
});
const plaidClient = new PlaidApi(configuration);
const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.post("/hello", (req, res) => {
  res.json({ message: "Hello " + req.body.name + "!" });
});

app.post("/create_link_token", async (req, res) => {
  const plaidRequest = {
    user: {
      client_user_id: "user",
    },
    client_name: "Plaid Test App",
    products: ["auth"],
    language: "en",
    country_codes: ["US"],
  };

  try {
    const createTokenResponse = await plaidClient.linkTokenCreate(plaidRequest);
    res.json(createTokenResponse.data);
  } catch (error) {
    console.error("Error creating link token:", error);
    res.status(500).json({ error: "Failed to create link token" });
  }
});

app.get("/", (req, res) => {
  res.send("Backend is running!");
});
app.listen(8000, () => {
  console.log("Server is running on port 8000! http://localhost:8000");
});
