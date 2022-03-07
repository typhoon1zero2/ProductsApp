const { links } = require('express/lib/response');
const React = require('react');
const DefaultLayout = require('../layout/Default.jsx');

const myStyle = {
    display: "inline-flex",
    position: "relative",
    flexDirection: "column",
    margin: "10px",
    background: "whitesmoke",
    width: "200px",
    height: "280px",
    boxShadow: "5px 5px 10px #ccc",
    alignContent: "center",
    alignItems: "center",
};


class Index extends React.Component {
    render(){
        const products = this.props.product;
        return(
            <DefaultLayout name="Product Index Page">
             <div>
                <ul class="nav nav-tabs">
                   {
                       products.map((product)=>{
                           return(
                               <div className='card'>
                                   <h4>{product.name}</h4>
                                   <p>{product.description}</p>
                                   <p>{product.image}</p>
                                   <article>{product.price}</article>
                                   <article>{product.qty}</article>
                                   <h2>
                                        {product.name} : {product.isQuality ? 'Quality' : ' Not Quality'}
                                    </h2>
                                   <p><a class="btn btn-primary btn-sm" href={`/products/${product._id}/edit`}>EDIT</a></p>
                                   <form  action={`/products/${product._id}?_method=DELETE`} method="POST">
                                   <input class="btn btn-primary btn-sm" type="submit" value={`DELETE ${product.name}`} />
                                   </form><hr/>
                                   </div>
                            
                           )
                       })
                   }
                </ul>
                <nav class="text-center">
                   <h4><a class="btn btn-primary btn-lg" href="/products/new">Create A NEW PRODUCT</a></h4> 
                </nav>
    
            </div>
            </DefaultLayout>
        )
    }
}

module.exports = Index;