// Import Our Dependencies
require('dotenv').config(); // Loads Env vars into process.env
const express = require('express'); 
const morgan = require('morgan');
const methodOverride = require('method-override');
const path = require('path');

// App Object Setup 
const app = express();
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx');
/****************************************
    MIDDLEWARE (APP.USE)
*****************************************/
app.use((req, res, next)=>{
    console.log(req.body)
    next()
})
app.use(express.urlencoded({ extended: true}))
app.use(methodOverride('_method'))


//Server Listener
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now listening on ${PORT}`))