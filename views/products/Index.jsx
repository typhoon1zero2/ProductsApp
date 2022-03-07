const { links } = require('express/lib/response');
const React = require('react');
const { Container , Row, Col, Card, Button, Navbar, Nav} = require("react-bootstrap");
const DefaultLayout = require('../layout/Default.jsx');

const myStyle = {
    display: "inline-flex",
    position: "relative",
    flexDirection: "column",
    margin: "10px",
    background: "whitesmoke",
    width: "200px",
    height: "280px",
    boxShadow: "5px 5px 10px #ccc",
    alignContent: "center",
    alignItems: "center",
};


class Index extends React.Component {
    render() {
        const products = this.props.product;
        console.log(products);
        return (
            <DefaultLayout>
              <div>
            <Container>
              <Row>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Electronic-Arts-Logo.svg/2048px-Electronic-Arts-Logo.svg.png" />
                    <Card.Body>
                      <Card.Title>Product Title Here:</Card.Title>
                      <Card.Text>
                        Product Details Here:
                                      </Card.Text>
                                      <Card.Text>
                                          Price Here:
                      </Card.Text>
                      <Button variant="primary">Edit Button Here</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </DefaultLayout>
      );
    }
  }
  

module.exports = Index;