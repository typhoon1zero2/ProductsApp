const React = require('react');
const DefaultLayout = require("../layout/Default.jsx");

class Login extends React.Component {
    render(){
        return(
            <DefaultLayout>
                <div class="row">
                <form action="/user/login" method="POST">
                    <h3>User Login</h3>
                    <div class="col">
                       UserName: <input name="username" type="text" class="form-control" placeholder="Username" aria-label="UserName" />
                     </div>
                <div class="col">
                        Password: <input name="password" type="password" class="form-control" placeholder="Password" aria-label="Password" />
                </div>
                <input type="submit" value="Login" />
                </form>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Login;