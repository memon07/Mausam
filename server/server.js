var express = require('express');
var app = express();                              
var morgan = require('morgan');
var cors = require('cors');
var bodyParser = require('body-parser');    

var config = require('./config')
config();


// configuration
app.use(express.static(__dirname + '/public'));                 

app.use(cors());
app.use(morgan('dev'));                                         
app.use(bodyParser.urlencoded({ 'extended': 'true' }));            
app.use(bodyParser.json());                                   
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

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