// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Sign up user
function signUp() {
    var email = document.getElementById("anjaligupta123001@gmail.com").value;
    var password = document.getElementById("Aj@123456").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed up
        var user = userCredential.user;
        console.log("User signed up: ", user);

        // Add user to Firestore
        db.collection("users").doc(user.uid).set({
            email: email
        })
        .then(() => {
            console.log("User added to Firestore");
        })
        .catch((error) => {
            console.error("Error adding user to Firestore: ", error);
        });

    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error("Error: ", errorCode, errorMessage);
    });
}

// Login user
function login() {
    var email = document.getElementById("anjaligupta123001@gmail.com").value;
    var password = document.getElementById("Aj@123456").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Logged in
        var user = userCredential.user;
        console.log("User logged in: ", user);
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error("Error: ", errorCode, errorMessage);
    });
}
