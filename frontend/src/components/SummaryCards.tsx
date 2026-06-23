import { Container, Row, Col, Card } from "react-bootstrap";

function SummaryCards() {
  return (
    <Container className="py-4">
      {/* Summary Cards */}
      <Row className="g-4 mb-4">
        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Total Balance</Card.Title>
              <h3>$16,283.04</h3>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Income</Card.Title>
              <h3>$4,500</h3>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Expenses</Card.Title>
              <h3>$2,800</h3>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Savings Rate</Card.Title>
              <h3>38%</h3>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Accounts */}
      <Row className="g-4 mb-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Checking Account</Card.Title>
              <h4>$4,250.82</h4>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Savings Account</Card.Title>
              <h4>$12,032.22</h4>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default SummaryCards;
