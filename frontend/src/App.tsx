import AppNavbar from "./components/AppNavbar.tsx";
import SummaryCards from "./components/SummaryCards.tsx";
import RecentTransactions from "./components/RecentTransactions.tsx";
import axios from "axios";
import { useEffect } from "react";

axios.defaults.baseURL = "http://localhost:8000/";

function App() {
  useEffect(() => {
    async function fetch() {
      const response = await axios.post("/create_link_token");
      console.log("Response: ", response.data);
    }
    fetch();
  }, []);

  return (
    <>
      <AppNavbar />
      <SummaryCards />
      <RecentTransactions />
    </>
  );
}

export default App;
