/* ----Cookies---- */

if (checkCookie()) {

    var userEmail = getCookie("username");

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {

            var table = document.querySelector('#table1 tbody');
            const dbEvaluationStudentsRef = firebase.database().ref("registrations");
            dbEvaluationStudentsRef.on('value', snap => {
                while (table.hasChildNodes()) {
                    table.removeChild(table.firstChild);
                }

                var students = snap.val();
                for (var i in students) {
                    var row = table.insertRow(-1);
                    for (var j in students[i]) {
                        cell = row.insertCell(-1);
                        cell.innerHTML = students[i][j];
                    }
                }
            });
        } else {

            window.location = "index.html";
        }
    });
} else {
    window.location = "index.html";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        return true;
    } else {
        return false;
    }
}

/*  ----End Cookies-----  */



/*    -----Logout-----   */
function logout() {
    firebase.auth().signOut();
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location = "index.html";
}

/*   -----End Logout-----   */
