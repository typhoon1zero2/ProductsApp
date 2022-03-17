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
} = require("react-bootstrap");
require("../../public/css/app.css");

class About extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <hr/>
        <hr/>
        <body class="container">
          <div class="bg-primary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
            <div>
              <div class="text-center">
                <img class="img-fluid" src="/img/crud.png" />
              </div>
              <br />
              <h1></h1>
            </div>
            <div class="row">
              <div class="col-sm">
                <div class="my-3 py-3">
                  <h2 class="display-5">
                    How I Developed my first full-stack CRUD Project!
                  </h2>
                  <p class="lead">
                    {" "}
                    Learning a new Technology is not only watching tutorials and
                    cloning the templates from the tutor's repository, always
                    try to built your own project without sticking to the
                    tutorials explore and read documentations Design your own
                    Schemas,Write custom Apis,etc... In this Apis I will walk
                    through my step by step process in developing my first CRUD
                    project.
                  </p>
                </div>
              </div>
              <div class="col-sm">
                <div class="my-3 py-3">
                  <h2 class="display-5">Plan & Design</h2>
                  <p class="lead">
                    Always have a design/plan of the architecture that you have
                    planned to build.In this project I have adopted the MVC
                    architecture and done a initial design of Models ,
                    Controllers and even Routes and middlewares for backend.
                    Below is the screenshot of my initial backend design.
                    <img class="img-fluid" src="/img/mvc.png" />
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm">
              <div class="my-3 py-3">
                <h2 class="display-5">Execute</h2>
                <p class="lead">
                  I started with writing my schemas for database I used the
                  Mongo and I had 2 MODELS in my application. After that I
                  started an EXPRESS SERVER in localhost and connected my Db
                  with it and once my app is up and running I started with my
                  backend controllers and wrote APIs for my application
                  corresponding to the routes that I designed initially.
                  <img class="img-fluid" src="/img/backend.jpeg" />
                </p>
              </div>
            </div>
            <div class="col-sm">
              <div class="my-3 py-3">
                <h2 class="display-5">Test</h2>
                <p class="lead">
                  Side by Side while writing Apis make sure you test them, so
                  that it won't be any problem at last. I prefer using Postman
                  for testing my APP.
                  <img class="img-fluid" src="/img/test.jpeg" />
                </p>
              </div>
            </div>
            <div class="col-sm">
              <div class="my-3 py-3">
                <h2 class="display-5">Designing frontend</h2>
                <p class="lead">
                  Once all backend stuffs are done and tested I moved to
                  frontend. By referring my figma design I stated to design my
                  frontend using REACT (jsx).For a fresher like me it is not a
                  easy task to design the frontend.I used my local server for my
                  backend and used my custom Apis for the frontend and for state
                  management I used REDUX for checking the Auth status of a
                  user.
                  <img class="img-fluid" src="/img/front-end.jpeg" />
                </p>
              </div>
            </div>
          </div>
          <div class="jumbotron">
            <h3>Tools and Technologies that I used in this project</h3>
            <p>
              <large>
                Frontend - Reactjs,Material Ui Redux(state management) Backend -
                Nodejs,Expressjs Database - Mongodb
              </large>
            </p>
            And that's how I developed my first app and will be still engaged in
            this project and will be adding more features to it
            <p>
              <a class="btn btn-primary btn-lg" href="/products">
                Visit Product Page
              </a>
            </p>
          </div>
          <div class="bg-light shadow-sm mx-auto width: 80%; height: 300px; border-radius: 21px 21px 0 0"></div>
        </body>
      </DefaultLayout>
    );
  }
}

module.exports = About;
