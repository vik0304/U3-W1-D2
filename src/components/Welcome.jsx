import { Container, Row, Col } from "react-bootstrap";

function Welcome() {
  return (
    <Container>
      <Row className="my-3 text-center">
        <Col>
          <h1>Welcome EpiBooks</h1>
          <h3>The best library on the web!</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Welcome;
