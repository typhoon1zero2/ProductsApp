const React = require('react');

class DefaultLayout extends React.Component {
    render(){
        const { products } = this.props;
        return (
            <html lang="en">
                <head>
                    <meta charSet='UTF-8' />
                    <meta httpEquiv='X-UA-Compatible' content='IE-edge' />
                    <meta name='viewpoint' content='width=device-width, initial-scale=1.0' />
                    <title>My Products Website</title>
                    <link rel="stylesheet" href="/css/app.css"/>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossOrigin="anonymous"></link>
                   
                </head>
                <body>
                    <header>
                        
                        </header>
                        <main>
                            <h1 class='h1' style={{ 
                            fontFamily: "Comfortaa",
                            background: "whitesmoke",
                            margin: 0,
                            marginBottom: '0.5em',
                            padding: '1em',
                            textAlign: 'center',
                            color: 'black',
                            textShadow: '1px 1px 1px red',
                       
                    }}>
                        {this.props.name}</h1>
                             {this.props.children}
                     </main>
                </body>

            </html>
        )
    }
}

module.exports = DefaultLayout;