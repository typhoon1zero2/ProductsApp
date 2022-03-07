const React = require('react');
const DefaultLayout = require("../layout/Default.jsx");

class New extends React.Component{
  render(){
      return(
          <DefaultLayout name="NEW PRODUCT PAGE">
              <form action="/products" method="POST">
                <fieldset>
                    <legend>Create Your Product</legend>
                    <label>
                        Product Name:<input type="text" name="name" placeholder="enter your product name" /> <br />
                    </label>
                    <label>
                        Description:<textarea rows="6" cols="20" name="description" placeholder="enter your product description" /> <br />
                    </label>
                    <label>
                        image:<input type="text" name="image" placeholder="enter your product image" /> <br />
                    </label>
                    <label>
                        Price:<input type="text" name="price" placeholder="enter your product price" /> <br />
                    </label>
                    <label>
                        Qty:<input type="text" name="qty" placeholder="enter your product qty" /> <br />
                    </label>
                    <label> Is Your Product Good?:<input type="checkbox" name="isQuality" /> </label> <br />
                    </fieldset>
                    <input type="submit" value="Create Your New Product" />
                </form>
                <nav>
                      <h4 class="text-center"><a class="btn btn-primary btn-lg" href='/products'>Back to Product Index Page</a></h4> 
                </nav>
          </DefaultLayout>
      )
  }
}

module.exports = New;