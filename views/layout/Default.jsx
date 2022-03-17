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

        <body class="container">
          <header class="site-header sticky-top py-1">
            <nav class="container d-flex flex-column flex-md-row justify-content-between">
              <img
                style={{ width: "25px", height: "40px" }}
                src="/img/Logo.jpeg"
              />

              <a className="py-2 d-none d-md-inline-block" href="/products">
                Home
              </a>
              <a
                className="py-2 d-none d-md-inline-block"
                href="/products/About"
              >
                About Us
              </a>
              <a className="py-2 d-none d-md-inline-block" href="products/New">
                Create Product
              </a>
              <a className="py-2 d-none d-md-inline-block" href="/user/login">
                Login
              </a>

              <a className="py-2 d-none d-md-inline-block" href="/user/logout">
                Logout
              </a>
              <a className="py-2 d-none d-md-inline-block" href="/user/SignUp">
                Sign-Up
              </a>
            </nav>
          </header>
          <main>
            <hr />
            <h1>{this.props.name}</h1>
            {this.props.children} <br />
          </main>
          <hr />
          <footer class="container py-5">
            <div class="row">
              <div class="col-12 col-md">
                <small class="d-block mb-3 text-muted">
                  © Phong Nguyen 2021-2022
                </small>

                <div></div>
              </div>
              <div class="col-6 col-md">
                <h5>Contact</h5>
                <ul class="list-unstyled text-small">
                  <li>
                    <img
                      style={{ width: "24px", height: "24px" }}
                      src="/img/linkedin.png"
                    />
                    <a
                      class="link-secondary"
                      href="https://www.linkedin.com/in/phong-nguyen-b9520b22b/"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <img
                      style={{ width: "24px", height: "24px" }}
                      src="/img/github.png"
                    />
                    <a
                      class="link-secondary"
                      href="https://github.com/typhoon1zero2"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <img
                      style={{ width: "24px", height: "24px" }}
                      src="/img/email.png"
                    />
                    <a
                      class="link-secondary"
                      href="mailto:ptnguyen617@yahoo.com"
                    >
                      ptnguyen617@yahoo.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;
