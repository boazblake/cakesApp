'use strict'

const express = require('express')
const app = express()

let bodyParser= require('body-parser');

let mongoose = require('mongoose'),
  Schema = mongoose.Schema

// set our port
const PORT = process.env.PORT || 3000 

// got env port for heroku or elsewhere, else set to 3000 for dev
app.set('port', PORT)

app.use( express.static ( __dirname + '/dist/assets'))

app.set('views', './dist/views')

app.set('view engine', 'ejs')

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({extended: true}) );

//MONGOOSE///
//new mongoose instance
const db = mongoose.connect('mongodb://localhost/productsDB')

let Product = require('./src/scripts/models/product')

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

router.use((req, res, next) =>  {
  //do logging
  console.log('something is happening');
  next(); // make sure we go to the next routes and don't stop here
})

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// more routes for our API will happen here

// on routes that end in /products
// ----------------------------------------------------
router.route('/products')

    // create a product (accessed at POST http://localhost:8080/api/products)
    .post(function(req, res) {
        var product = new Product();      // create a new instance of the Product model
        product.name = req.body.name;  // set the products name (comes from the request)

        // save the product and check for errors
        product.save(function(err) {
            if (err)
                res.send(err);
            res.json({ message: 'Product created!' });
        });
    })

    // get all the products (accessed at GET http://localhost:8080/api/products)
    .get(function(req, res) {
        Product.find(function(err, products) {
            if (err)
                res.send(err);

            res.json(products);
        });
    });




// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api/v1', router);


// //Fetch from DB
// app.get('/api/v1/products', function(req, res) {
//   ProductsModel.find({}, function(err, products){
//     if(err) res.status(500).send(err)
//       else res.json(products)
//   })
// })

// //POST to DB//
// app.post('/api/v1/products', function(req, res) {
//   req.body.uploadedAt = new Date()
  
//   let newRecord = new ProductsModel(req.body)
//   newRecord.save()
//   res.status(201).send(newRecord)

//   res.json(req.body)
// })


// //REMOVE from DB



//GET and SERVE HTML///
app.get('/admin', function(req, res) {
  res.render('admin')
})

app.get('/', function(req, res) {
  res.render('index');
})

// START THE SERVER
// =============================================================================
app.listen(PORT,function() {
	console.log('\n\n===== listening for requests on port ' + PORT + ' =====\n\n')
})

