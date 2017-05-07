var express = require('express');
  bodyParser = require('body-parser');
  db = require('./models');

var app = express();

// serve static files in public
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
// need to add this so that we can accept request payloads
app.use(bodyParser.json());
app.use('/vendor', express.static(__dirname + '/bower_components'));

// custom middleware to console.log some helpful information
//   in terminal every time we get a request
function logRequestInfo(req, res, next){
  console.log(`\nRECEIVED REQUEST : ${req.method} ${req.url}`);
  console.log('query params:', req.query);
  console.log('body:', req.body);
  next();
}


/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/templates/:name', function templates(req, res) {
  var name = req.params.name;
  res.sendFile(__dirname + '/views/templates/' + name + '.html');
});


/*
 * JSON API Endpoints
 */

// index of all animals
app.get('/api/animals', function (req, res) {
  db.Animal.find({}, function(err, animals){
      if (err) {
        res.status(500).send(err);
      }
      res.json(animals);
    });
});

// show single animal with ID
app.get('/api/animal/:id', function (req, res) {
  console.log('get call show');
  db.Animal.findById(req.params.id, function(err, animal){
      if (err) {
        res.status(500).send(err);
      }
      res.json(animal);
    });
});

// show animals of type
app.get('/api/animals/:type', function (req, res) {
  console.log('get call show');
  db.Animal.find({type:req.params.type}, function(err, animals){
      if (err) {
        res.status(500).send(err);
      }
      res.json(animals);
    });
});

app.get('*', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening at http://localhost:3000/');
});
