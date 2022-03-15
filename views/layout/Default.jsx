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
              <a class="py-2" href="#" aria-label="Product">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="d-block mx-auto"
                  role="img"
                  viewBox="0 0 24 24"
                >
                  <title>Products Website</title>
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path>
                </svg>
              </a>
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
            <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
              <div class="col-md-5 p-lg-5 mx-auto my-5">
                <h1 class="display-4 fw-normal">Products Apisss</h1>
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
            <h1>{this.props.name}</h1>
            {this.props.children} <br />
          </main>

          <footer class="container py-5">
            <div class="row">
              <div class="col-12 col-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="d-block mb-2"
                  role="img"
                  viewBox="0 0 24 24"
                >
                  <title>Product</title>
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path>
                </svg>

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
                    <a class="link-secondary" href="https://www.yahoo.com/">
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
