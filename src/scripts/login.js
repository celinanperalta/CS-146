
function update(){
    //this should reset on the signup page but we'll leave it for now.
    if (sessionStorage.name == undefined) {
        document.getElementById("current-user-name").addEventListener("mousedown", function(){
            window.location.href = "#register";
        });
        return;
    }
    if (sessionStorage.isTutor == "false") {
        document.getElementById("current-user-name").innerText = sessionStorage.name;
        document.getElementById("current-user-type").innerText = "student";
    } else {
        document.getElementById("current-user-name").innerText = sessionStorage.t_name;
        document.getElementById("current-user-type").innerText = "tutor";
    }
}

window.addEventListener("load", function () {
    update();
});