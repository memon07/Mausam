module.exports = function(app){
    const user = require('../controllers/login.js');
    // login
    app.get('/api/login', user.login);

}