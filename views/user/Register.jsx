const React = require('react');
const DefaultLayout = require("../layout/Default.jsx");

class Register extends React.Component {
    render(){
        return(
            <DefaultLayout>
                <div class="row">
                <form action="/user/register" method="post">
                    <h3>Register</h3>
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

module.exports = Register;