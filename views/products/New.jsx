const React = require("react");
const DefaultLayout = require("../layout/Default.jsx");
const {
  Container,
  Row,
  Col,
  Card,
  Button,
  Navbar,
  Nav,
  Form,
} = require("react-bootstrap");

class New extends React.Component {
  render() {
    const products = this.props.product;
    const session = this.props.session;
    return (
      <DefaultLayout session ={session}>
        <form action="/products" method="POST">
          <Container>
            <Row className="createForm">
              <Col>
                <Form.Label htmlFor="inputProductName">Product Name</Form.Label>
                <Form.Control
                  type="text"
                  id="inputProductName"
                  aria-describedby="ProductNameBlock"
                  name="name"
                />
                <Form.Text id="ProductNameBlock" muted>
                  Input a new Product Name
                </Form.Text>
              </Col>
              <Col>
                <Form.Label htmlFor="inputProductDescription">
                  Product Description
                </Form.Label>
                <Form.Control
                  type="text"
                  id="inputProductDescription"
                  aria-describedby="ProductDescription"
                  name="description"
                />
                <Form.Text id="ProductDescription" muted>
                  Input a new Product Description
                </Form.Text>
              </Col>
              <Col>
                <Form.Label htmlFor="inputPrice">Price</Form.Label>
                <Form.Control
                  type="text"
                  id="inputPrice"
                  aria-describedby="PriceBlock"
                  name="price"
                />
                <Form.Text id="PriceBlock" muted>
                  Input a new Price
                </Form.Text>
              </Col>
              <Col>
                <Form.Label htmlFor="inputImageUrl">Image URL</Form.Label>
                <Form.Control
                  type="url"
                  id="inputImageURL"
                  aria-describedby="ImageUrlBlock"
                  name="image"
                />
                <Form.Text id="ImageUrlBlock" muted>
                  Input a new Image URL
                </Form.Text>
              </Col>
              <label>
                Your Product quality?:{" "}
                <input type="checkbox" name="isQuality" />
              </label>
              <Button
                style={{ color: "whitesmoke", margin: "35px" }}
                variant="danger"
                type="submit"
                value="Create Your Product"
              >
                Create Product
              </Button>
            </Row>
          </Container>
        </form>
      </DefaultLayout>
    );
  }
}

module.exports = New;
