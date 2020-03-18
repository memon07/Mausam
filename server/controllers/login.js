var Firebase = require('firebase');
var db = Firebase.firestore();
var usersRef = db.collection("users");

// login.
exports.login = (req, res) => {
    var data = req.body;
    Firebase.auth().signInWithEmailAndPassword(data.email, data.password)
   .then(function(firebaseUser) {
       // Success 
       console.log(firebaseUser)
   })
  .catch(function(error) {
        console.error("Error adding user: ", error);
        res.status(500).send({
            "message":"error occurred while creating the User.\nError:"+error
        });
  });
};
