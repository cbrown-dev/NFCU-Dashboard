import AppNavbar from "./components/AppNavbar.tsx";
import SummaryCards from "./components/SummaryCards.tsx";
import RecentTransactions from "./components/RecentTransactions.tsx";
import axios from "axios";
import { useEffect, useState } from "react";
import { usePlaidLink } from "react-plaid-link";
axios.defaults.baseURL = "http://localhost:8000/";

function PlaidAuth({ publicToken }) {
  return <span>{publicToken}</span>;
}

function App() {
  const [linkToken, setLinkToken] = useState();
  const [publicToken, setPublicToken] = useState();

  useEffect(() => {
    async function fetch() {
      const response = await axios.post("/create_link_token");
      setLinkToken(response.data.link_token);
    }
    fetch();
  }, []);

  const { open, ready } = usePlaidLink({
    token: linkToken,
    onSuccess: (public_token, metadata) => {
      setPublicToken(publicToken);
      console.log("sucess", public_token, metadata);
      // send public_token to server
    },
  });

  return publicToken ? (
    <PlaidAuth publicToken={publicToken} />
  ) : (
    <button onClick={() => open()} disabled={!ready}>
      Connect a bank account
    </button>
  );

  return (
    <>
      <AppNavbar />
      <SummaryCards />
      <RecentTransactions />
    </>
  );
}

export default App;
