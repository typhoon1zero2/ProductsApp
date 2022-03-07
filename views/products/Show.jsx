const React = require('react');
const DefaultLayout = require('../layout/Default.jsx');


class Show extends React.Component {
    render(){
        const { product } = this.props
       // const date = moment(log.createAt).format('MMM Do YYYY,h:mm:ss a')
        return(
            // Inside the render of the class
            <DefaultLayout name="This is Product Show Page">
            <div class="jumbotron">
                <nav class="container">
                <div class="row">
                <div class="col-sm">
                        <h4>Product Name: {`${product.name}`}</h4>
                    </div>
                    <div class="col-sm">
                        <p>Description: {product.description}</p>
                    </div>
                    <div class="col-sm">
                        <p>Image: {product.image}</p>
                    </div>
                    <article>Price: {product.price}</article>
                    <div class="col-sm">
                        <p>Qty: {product.qty}</p>
                    </div>
                    <p>{product.isQuality ? 'This product quality' : 'This product is not quality'}</p>
                     {/* <div class="col-sm">
                        <h4>Created Date: {moment(log.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</h4>
                        <h4>Updated Date: {moment(log.updatedAt).format('MMMM Do YYYY, h:mm:ss a')}</h4>
                    </div> */}
                 </div>
                 </nav>
            </div>
            <div class="text-center">
                 <h4><a class="btn btn-primary btn-lg" href="/products">Go Back to Index Page</a></h4>
            </div>
        </DefaultLayout>
        )
    }
}

module.exports = Show;