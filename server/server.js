var express = require('express');
var app = express();                              // create our app w/ express
var morgan = require('morgan');
var cors = require('cors');
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)

var config = require('./config')
config();


// configuration
app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users

app.use(cors());
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({ 'extended': 'true' }));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

require('./routes/user.js')(app);
require('./routes/login.js')(app);

app.get('/', (req,res)=>{
    res.json('mausam api loaded sucessfully')
});

const port = process.env.PORT || 8000;

app.listen(port, function() {
    console.log("Runnning on " + port);
});

module.exports = app;