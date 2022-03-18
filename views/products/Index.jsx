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
    const session = this.props.session;
    console.log(products);
    return (
      <DefaultLayout session = {session}>
        <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
          <div class="col-md-5 p-lg-5 mx-auto my-5">
            <h3 class="display-4 fw-normal">Products App</h3>
            <p class="lead fw-normal">
              This is your Product's marketing pages.
            </p>
            <a class="btn btn-outline-secondary" href="/products">
              Back to Product Page
            </a>
          </div>
          <div class="product-device shadow-sm d-none d-md-block"></div>
          <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
        <Container>
          <Row>
            {products.map((data) => (
              <Col>
                <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
                  <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div className="bg-light shadow-sm mx-auto width: 80%; height: 300px; border-radius: 21px 21px 0 0">
                      <div
                        className="my-3 p-3"
                        style={{ width: "26.7rem", background: "whitesmoke" }}
                      >
                        <h2 className="display-5">{`${data.name}`}</h2>
                        <p className="lead">{data.description}</p>
                        <Card.Img
                          style={{
                            color: "burlywood1",
                            margin: "10px",
                            boxShadow: "5px 5px 0px",
                          }}
                          variant="top"
                          src={data.image}
                        />
                        <Card.Text style={{ color: "blueviolet" }}>
                          $ {data.price}
                        </Card.Text>
                        <Card.Text
                          style={{ fontFamily: "Arial", fontSize: "20px" }}
                        >
                          In-stock: {data.qty}
                        </Card.Text>
                        <Button
                          style={{
                            color: "burlywood",
                            margin: "5px",
                            boxShadow: "5px 5px 0px",
                          }}
                          variant="primary"
                          href={`/products/${data._id}/edit`}
                        >
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </DefaultLayout>
    );
  }
}

module.exports = Index;
