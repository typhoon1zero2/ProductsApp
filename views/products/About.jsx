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
        <div>
          <div class="text-center">
            <img class="img-fluid" src="/img/crud.png" />
          </div>
          <h1>
            How I Developed my first full-stack <large>Mern</large> Project!
          </h1>
        </div>
        <div class="row">
          <div class="col-sm">
            <p>
              Learning a new Technology is not only watching tutorials and
              cloning the templates from the tutor's repository, always try to
              built your own project without sticking to the tutorials explore
              and read documentations,Design you own Schemas,Write custom
              Apis,etc... In this blog I will walk through my step by step
              process in developing my first MERN stack project.
            </p>
          </div>
          <div class="col-sm">
            <h2>Plan & Design</h2>
            <p>
              Always have a design/plan of the architecture that you have
              planned to build.In this project I have adopted the MVC
              architecture and done a initial design of Models , Controllers and
              even Routes and middlewares for backend. Below is the screenshot
              of my initial backend design.
            </p>
          </div>
          <div class="col-sm">
            <h2>Execute</h2>
            <p>
              I started with writing my schemas for database I used the Nosql db
              Mongo and I had 4 MODELS in my application. After that I started
              an EXPRESS SERVER in localhost and connected my Db with it and
              once my app is up and running I started with my backend
              controllers and wrote APIs for my application corresponding to the
              routes that I designed initially.
            </p>
          </div>
          <div class="col-sm">
            <h2>Test</h2>
            <p>
              Side by Side while writing Apis make sure you test them, so that
              it won't be any problem at last. I prefer using Postman for
              testing my APP.
            </p>
          </div>
          <div class="col-sm">
            <h2>Designing frontend</h2>
            <p>
              Once all backend stuffs are done and tested I moved to frontend.
              By referring my figma design I stated to design my frontend using
              REACT (jsx).For a fresher like me it is not a easy task to design
              the frontend.I used my local server for my backend and used my
              custom Apis for the frontend and for state management I used REDUX
              for checking the Auth status of a user.
            </p>
          </div>
        </div>
        <div class="jumbotron">
          <h1>Tools and Technologies that I used in this project</h1>
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
              Visit My Product Page
            </a>
          </p>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = About;
