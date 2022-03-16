const React = require("react");
const DefaultLayout = require("../layout/Default.jsx");

class Login extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div class="row">
            <div class="my-3 p-3">
              <form action="/user/login" method="POST">
                <fieldset>
                <legend class="display-5">User Login</legend>
                <label class="lead">
                  <input
                    name="username"
                    type="text"
                    class="form-control"
                    placeholder="Username"
                    aria-label="UserName"
                  />
                </label>
                <label class="lead">
                  <input
                    name="password"
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    aria-label="Password"
                  />
                </label>
                <input type="submit" value="Login" />
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Login;
