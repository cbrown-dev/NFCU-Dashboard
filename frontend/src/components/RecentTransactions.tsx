import { Card, Table } from "react-bootstrap";
function RecentTransactions() {
  return (
    <>
      {/* Transactions */}
      <Card>
        <Card.Header>
          <h4 className="mb-0">Recent Transactions</h4>
        </Card.Header>

        <Card.Body>
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
