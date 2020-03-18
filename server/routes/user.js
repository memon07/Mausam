module.exports = function(app){
    const user = require('../controllers/user.js');

    // create User
    app.post('/api/user', user.create);

    // Retrieve all Users
    app.get('/api/user', user.getAll);

    // Retrieve a single User by user id (uid)
    app.get('/api/user/:uid', user.findUser);

    // Update User by uid
    app.put('/api/user/:uid', user.update);

    // Delete User by uid
    app.delete('/api/user/:uid', user.delete);
}