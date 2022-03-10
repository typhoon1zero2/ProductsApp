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
        <body>
          <header style={{display: "inline" ,position: "relative", flexDirection: "column",  margin: "10px", background: "whitesmoke", width: "200px", height:  "280px", alignContent: "center", alignItems: "center"}}>
            <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="/products">HOME</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="/products/show">Show </Nav.Link>
                  <Nav.Link href="/products/new">Add </Nav.Link>
                  <Nav.Link
                    href="/products/edit">
                    Edit
                  </Nav.Link>
                  <Nav.Link href={"user"}>Log In</Nav.Link>
                  <Nav.Link href="/aboutUs/">About</Nav.Link>
                  <Nav.Link href="/register/">Register</Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </header>
          <main>
            <h1>{this.props.name}</h1>
            {this.props.children} <br />
          </main>
          <footer>
            <div class="card-footer">
              <small style={{ textAlign: "center" }} class="text-muted">
                Phong Nguyen
              </small>
            </div>
          </footer>
        </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;
