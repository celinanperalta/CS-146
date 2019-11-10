
function getQueryString() {
    var name = document.getElementById("name-entry").value;
    var email = document.getElementById("email-entry").value;
    var zip = document.getElementById("zipcode-entry").value;
    var subjects = document.getElementsByClassName("form-check-input");
    var checkedSubjects = "";
    var distance = document.getElementById("distance").value;

    for (var i = 0; i != subjects.length; ++i) {
        if (subjects[i].type="checkbox" && subjects[i].checked == true){
            checkedSubjects += subjects[i].value + ",";
        }
    
    }
    if (checkedSubjects.length == 0)
        checkedSubjects = "none";
    checkedSubjects = checkedSubjects.substr(0, checkedSubjects.length - 1);
    
    name.replace(" ", "+");
    email.replace('\.', "%2E");
    email.replace('\@', "%40");

    var queryString = "?name=" + name + "&zip=" + zip + "&subjects=" + checkedSubjects + "&distance=" + distance;
    console.log("isn't this so secure");
    return queryString;
}

function validate(){
    // todo: validate fields, display alert if fields not all filled out
}

window.addEventListener("load",function() {
    document.getElementById('signup').addEventListener("submit",function(e) {
        $(function () { 
            queryString = getQueryString();
            window.location.href="../pages/tutors.html" + queryString;
        }); 
    });
  });