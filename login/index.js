var cvalue;
firebase.auth().onAuthStateChanged(function (user) {
    if (user)  {
        // No user is signed in.


        window.location="main.html";
        
    var d = new Date();
    d.setTime(d.getTime() + (24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = "username" + "=" + cvalue + ";" + expires + ";path=/";

    }else {
        
        document.getElementById("login_div").style.display = "block";
        
    }
});


function login() {
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value; /*           realtime flowmeter reading       */
    cvalue=userEmail;
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) { //auth error
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error : " + errorMessage);

        // ...
    });

}