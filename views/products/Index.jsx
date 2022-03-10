const { links } = require("express/lib/response");
const React = require("react");
const {
  Container,
  Row,
  Col,
  Card,
  Button,
  Navbar,
  Nav,
} = require("react-bootstrap");
const DefaultLayout = require("../layout/Default.jsx");

class Index extends React.Component {
  render() {
    const products = this.props.product;
    console.log(products);
    return (
      <DefaultLayout>
        <br />
        <div>
          <Container>
            <Row>
              {products.map((data) => (
                <Col>
                  <Card style={{ width: "12rem", background: "whitesmoke" }}>
                    <Card.Body>
                      <Card.Title>
                        <h3>{`${data.name}`}</h3>
                      </Card.Title>
                      <Card.Img  variant="top" src={data.image} />
                      <Card.Title style={{ fontSize: "18px" }}>
                        {data.description}
                      </Card.Title>
                      <Card.Text style={{ color: "blueviolet" }}>
                        $ {data.price}
                      </Card.Text>
                      <Card.Text
                        style={{ fontFamily: "Arial", fontSize: "20px" }}
                      >
                        In-stock: {data.qty}
                      </Card.Text>
                      <Button
                        style={{ color: "purple", margin: "5px", boxShadow: "5px 5px 0px" }}
                        variant="primary"
                        href={`/products/${data._id}/edit`}
                      >
                        Edit
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Index;
