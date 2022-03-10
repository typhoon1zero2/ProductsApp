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

import "../../public/css/app.css";

// const divStyle = {
//   display: "none",
// };

class Edit extends React.Component {
  // UpdateProduct() {
  //     let path = `http://localhost:8000/products/62257b17bc7d7db0bd6e989c`;
  //     let history = useHistory();
  //     this.history.push(path);
  //   }

  render() {
    const products = this.props.product;
    return (
      <DefaultLayout>
        <div className="card">
          <Container >
            <Row>
              <Col>
                <Card style={{ width: "12rem" }}>
                  <Card.Img />
                  <Card.Body>
                    <Card.Title>
                      <h3>{`${products.name}`}</h3>
                    </Card.Title>
                    <Card.Img variant="top" src={products.image} />
                    <Card.Title style={{ fontSize: "18px" }}>
                      {products.description}
                    </Card.Title>
                    <Card.Text style={{ color: "blueviolet" }}>
                      $ {products.price}
                    </Card.Text>
                    <Card.Text style={{ fontSize: "20px" }}>
                      In-stock: {products.qty}
                    </Card.Text>
                    <form
                      action={`/products/${products._id}?_method=DELETE`}
                      method="POST"
                    >
                      <Button
                        type="submit"
                        value={`Submit Changes to ${products.name}`}
                      >
                        Delete
                      </Button>
                    </form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <form
              action={`/products/${products._id}?_method=PUT`}
              method="POST"
            >
              <Row className="editForm">
                <Col>
                  <Form.Label htmlFor="inputProductName">
                    Product Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    id="inputProductName"
                    aria-describedby="ProductNameBlock"
                    name="name"
                    defaultValue={products.name}
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
                    defaultValue={products.description}
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
                    defaultValue={products.price}
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
                    defaultValue={products.image}
                  />
                  <Form.Text id="ImageUrlBlock" muted>
                    Input a new Image URL
                  </Form.Text>
                </Col>
                {/* <Button onClick={this.UpdateProduct}>Update</Button> */}
                <Button
                  style={{ color: "whitesmoke", margin: "20px" }}
                  type="submit"
                  value={`Submit Changes to ${products.name}`}
                >
                  Update
                </Button>
              </Row>
            </form>
          </Container>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Edit;
