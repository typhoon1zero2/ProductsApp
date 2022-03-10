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
require("../../public/css/app.css");

class DefaultLayout extends React.Component {
  render() {
    const products = this.props.product;
    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE-edge" />
          <meta
            name="viewpoint"
            content="width=device-width, initial-scale=1.0"
          />
          <title>My Products Website</title>
          <link rel="stylesheet" href="/css/app.css" />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
            integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn"
            crossOrigin="anonymous"
          ></link>
        </head>
        <body style={{ background: "burlywood1" }}>
          <header style={{display: "inline" ,position: "relative", flexDirection: "column",  margin: "10px", background: "whitesmoke", width: "200px", height:  "280px", alignContent: "center", alignItems: "center"}}>
            <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="/products">HOME</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="/products/New">Add </Nav.Link>
                  <Nav.Link href="/user/login">Log In</Nav.Link>
                  <Nav.Link href="/user/register/">Register</Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </header>
          <main>
            <h1>{this.props.name}</h1>
            {this.props.children} <br />
          </main>
          {/* <footer style={{ fontSize: "18px", fontFamily: "fantasy ", textAlign: "center", background: "burlywood" }}>
            <div class="card-footer" >
              <small class="text-muted">
              <Nav.Link href="products/About">About</Nav.Link>
                Copyright @ Phong Nguyen
              </small>
            </div>
          </footer> */}
          <footer>
          <div class="jumbotron">
    <large>Copyright @ Phong Nguyen 2022</large>
    <p></p>

    <p><a class="btn btn-primary btn-lg" href="products/About">About</a></p>
    </div>
          </footer>
        </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;
