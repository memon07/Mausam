var Firebase = require('firebase');
var db = Firebase.firestore();
var usersRef = db.collection("users");
// Create user.
exports.create = (req, res) => {
    var data = req.body;
    usersRef.add(data)
        .then(function (userRef) {
            console.log("User Saved with ID: ", userRef.id);
            res.json({ message: "Success: User Saved with ID: "+userRef.id});
        })
        .catch(function (error) {
            console.error("Error adding user: ", error);
            res.status(500).send({
                "message":"error occurred while creating the User.\nError:"+error
            });
        });
};

// Retrieve all users.
exports.getAll = (req, res) => {
    usersRef.get().then((querySnapshot) => {
        const users = [];
        querySnapshot.forEach((user) => {
            var userData = user.data();
            userData["id"] = user.id;
            users.push(userData);
        });
        res.json({"data":users});

    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    });
};

// Find single User with a uid.
exports.findUser = (req, res) => {
    var uid = req.params.uid;

    usersRef.doc(uid).get().then((user) => {
        if (user.exists) {
            res.json(user.data());
        } else {
            res.status(404).send({
                message: "User not found with Id: " + req.params.uid
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    });
}; 

// Update User by the uid
exports.update = (req, res) => {

    var uid = req.params.uid;

    var data = req.body;

    usersRef.doc(uid).update(data).then(function() {
        res.json({"Message":"User updated successfully"});
    })
    .catch(function(error) {
        res.status(500).send({
            message: "Error updating User with Id: " + req.params.uid
        });
    });
};

// Delete User
exports.delete = (req, res) => {
    var uid = req.params.uid;

    usersRef.doc(uid).delete().then(function() {
        console.log("User successfully deleted!");
    }).catch(function(error) {
        res.json({
            "message": "Error removing User: " + req.params.uid
        });
        console.error("Error removing User: ", error);
    });
};