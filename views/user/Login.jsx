const React = require('react');
const DefaultLayout = require("../layout/Default.jsx");

class Login extends React.Component {
    render(){
        return(
            <DefaultLayout>
                <div class="row">
                <form action="/user/login" method="post">
                    <h3>User Login</h3>
                    <div class="col">
                       UserName: <input type="text" class="form-control" placeholder="Username" aria-label="UserName" />
                     </div>
                <div class="col">
                        Password: <input type="password" class="form-control" placeholder="Password" aria-label="Password" />
                </div>
                </form>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Login;