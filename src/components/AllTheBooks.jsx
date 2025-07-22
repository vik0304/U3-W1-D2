import { Component } from "react";
import { Container, Row, Col, Dropdown, Alert, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import horror from "../data/horror.json";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";

const empty = [];
const categories = [empty, horror, fantasy, history, romance, scifi];

class AllTheBooks extends Component {
  state = {
    activeCategory: categories[0],
  };
  removeBook = (asinToRemove) => {
    this.setState((prevState) => ({
      activeCategory: prevState.activeCategory.filter(
        (libro) => libro.asin !== asinToRemove
      ),
    }));
  };
  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col>
            <Dropdown
              onSelect={(eventKey) =>
                this.setState({ activeCategory: categories[eventKey] })
              }
            >
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Select book category
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#" eventKey={1}>
                  Horror
                </Dropdown.Item>
                <Dropdown.Item href="#" eventKey={2}>
                  Fantasy
                </Dropdown.Item>
                <Dropdown.Item href="#" eventKey={3}>
                  History
                </Dropdown.Item>
                <Dropdown.Item href="#" eventKey={4}>
                  Romance
                </Dropdown.Item>
                <Dropdown.Item href="#" eventKey={5}>
                  Sci-fi
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <Row className="g-3 my-3">
          {this.state.activeCategory === categories[0] ? (
            <Alert variant="warning">
              You have to choose a category from the dropdown menu to show the
              books!
            </Alert>
          ) : (
            this.state.activeCategory.map((libro) => {
              return (
                <Col xs="6" md="4" lg="3" xl="2" key={libro.asin}>
                  <Card className="h-100">
                    <Card.Img
                      variant="top"
                      src={libro.img}
                      style={{ height: "300px", objectFit: "cover" }}
                    />
                    <Card.Body className="d-flex flex-column justify-content-between">
                      <Card.Title>{libro.title}</Card.Title>
                      <div className="d-flex justify-content-evenly">
                        <Button variant="success">{libro.price} $</Button>
                        <Button
                          variant="danger"
                          onClick={() => this.removeBook(libro.asin)}
                        >
                          Delete
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          )}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
