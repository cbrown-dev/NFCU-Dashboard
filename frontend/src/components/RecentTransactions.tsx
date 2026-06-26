import { Card, Table, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

function RecentTransactions() {
  const [status, setStatus] = useState("");

  const pingServer = async () => {
    try {
      const response = await axios.get("http://localhost:8000");
      setStatus(`✅ Server responded with ${response.status}`);
      console.log(response.data);
    } catch (error: any) {
      console.error(error);

      if (error.response) {
        setStatus(`❌ ${error.response.status} ${error.response.statusText}`);
      } else if (error.request) {
        setStatus("❌ No response from server.");
      } else {
        setStatus(`❌ ${error.message}`);
      }
    }
  };

  return (
    <>
      <Card>
        {/* Transactions */}
        <Card.Header className="d-flex justify-content-between align-items-center">
          <span>Recent Transactions</span>
          <Button variant="primary" size="sm" onClick={pingServer}>
            Ping Server
          </Button>
        </Card.Header>

        <Card.Body>
          {status && (
            <div className="mb-3">
              <strong>{status}</strong>
            </div>
          )}

          <Table responsive hover striped>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>06/21/2026</td>
                <td>Netflix</td>
                <td>-$15.99</td>
              </tr>

              <tr>
                <td>06/20/2026</td>
                <td>Payroll Deposit</td>
                <td>+$1,250.00</td>
              </tr>

              <tr>
                <td>06/19/2026</td>
                <td>Amazon</td>
                <td>-$42.17</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  );
}

export default RecentTransactions;
