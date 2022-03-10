const React = require("react");
const DefaultLayout = require("../layout/Default.jsx");

class Show extends React.Component {
  render() {
    const products = this.props.product;
    // const date = moment(log.createAt).format('MMM Do YYYY,h:mm:ss a')
    return (
      // Inside the render of the class
      <DefaultLayout>
        <div class="card-group">
          <div class="card">
            <img
              src={products.image}
              style={{ width: "300px", height: "300px" }}
              class="card-img-top"
              alt="product image"
            />
            <div class="card-body">
              <h4 style={{ color: "brown"}} class="card-title">Product Name: {`${products.name}`}</h4>
              <p style={{fontFamily: "fantasy"}} class="card-text">Description:  {`${products.description}`}</p>
              <p class="card-text">
                <small class="text-muted"> $ {products.price}</small>
              </p>
              <p class="card-text">
                <small class="text-muted">In-Stock: {products.qty}</small>
              </p>
              <p class="card-text">
                <small class="text-muted">{products.isQuality ? 'Good' : 'Bad'}</small>
              </p>
              
            </div>
          </div>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Show;
