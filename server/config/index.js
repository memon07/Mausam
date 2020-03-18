var Firebase = require('firebase');

module.exports = () => {
    Firebase.initializeApp({

        databaseURL: "https://mausam-a75d1.firebaseio.com/",
        serviceAccount: "./firebase.json",
        projectId: "mausam-a75d1",
    
    });
}