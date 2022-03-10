const React = require('react');
const DefaultLayout = require('../layout/Default.jsx')

class About extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <div>
                    <h1>Hello</h1>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = About;
