import AppNavbar from "./components/AppNavbar.tsx";
import SummaryCards from "./components/SummaryCards.tsx";
import RecentTransactions from "./components/RecentTransactions.tsx";
function App() {
  return (
    <>
      <AppNavbar />
      <SummaryCards />
      <RecentTransactions />
    </>
  );
}

export default App;
