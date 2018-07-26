// Initialize Firebase
var config = {
    apiKey: "AIzaSyCKHfPV7opXXXh861TcA6Pj1jwFgqriEbI",
    authDomain: "saankethika18-c3bb5.firebaseapp.com",
    databaseURL: "https://saankethika18-c3bb5.firebaseio.com",
    projectId: "saankethika18-c3bb5",
    storageBucket: "saankethika18-c3bb5.appspot.com",
    messagingSenderId: "187120054785"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('registrations');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var dept = getInputVal('dept');
    var college = getInputVal('college');
    var one = "No",
        two = "No",
        three = "No",
        four = "No",
        five = "No",
        six = "No"

    if (document.getElementById("one").checked)
        one = "Yes";
    if (document.getElementById("two").checked)
        two = "Yes";
    if (document.getElementById("three").checked)
        three = "Yes";
    if (document.getElementById("four").checked)
        four = "Yes";
    if (document.getElementById("five").checked)
        five = "Yes";
    if (document.getElementById("six").checked)
        six = "Yes";

    // Save message
    if (document.getElementById("one").checked || document.getElementById("two").checked || document.getElementById("three").checked || document.getElementById("four").checked || document.getElementById("five").checked || document.getElementById("six").checked) {

        saveMessage(name, email, phone, dept, one, two, three, four, five, six, college);

        document.querySelector('.alert').style.display = 'block';

        // Hide alert after 3 seconds
        setTimeout(function () {
            document.querySelector('.alert').style.display = 'none';
        }, 3000);

        // Clear form
        document.getElementById('contactForm').reset();
    } else {
        var x = document.getElementById("snackbar2");
        x.className = "show";
        setTimeout(function () {
            x.className = x.className.replace("show", "");
        }, 3000);
    }

    // Show alert
}

// Function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save to firebase
function saveMessage(name, email, phone, dept, one, two, three, four, five, six, college) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        aname: name,
        bemail: email,
        cphone: phone,
        dept: dept,
        eone: one,
        ftwo: two,
        gthree: three,
        hfour: four,
        ifive: five,
        jsix: six,
        kcollegeName: college
    });
    document.getElementById("contactForm").reset();
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, 3000);
}
