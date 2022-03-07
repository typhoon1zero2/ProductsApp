const React = require('react');
const DefaultLayout = require('../layout/Default.jsx');

class Edit extends React.Component {
    render(){
        const { product } =this.props;
        return (
            <DefaultLayout name="Edit Product">
                <div className='card'>
                    <form class="container" action={`/products/${this.props.product._id}?_method=PUT`} method="POST">
                        <h4>Product Name:</h4> <input type="text" name="name"  defaultValue={this.props.product.name}/>
                        <p>Description:</p> <input type="text"  description="description" defaultValue={this.props.product.description} />
                        <p>Image: </p> <input type="text" name="image" defaultValue={this.props.product.image} />
                        <article>Price: </article> <input type="text" name="price" defaultValue={this.props.product.price} /><br/>
                        <article>QTY:</article> <input type="text" name="qty" defaultValue={this.props.product.qty} />
                        <label>
                            Quality Product?{ this.props.product.isQuality? <input type="checkbox" name="isQuality" defaultChecked /> : <input type="checkbox" name="isQuality"/> }
                        </label><br/>
                        <input class="btn btn-primary btn-md" type="submit" value="Submit Updated Product"/><br/>
                  </form>
                    </div>
                    <nav>
                      <h4 class="text-center"><a class="btn btn-primary btn-lg" href='/products'>Back to Product Page</a></h4> 
                </nav>
            </DefaultLayout>
        )
    }
}

module.exports = Edit;