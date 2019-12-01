class Profile {
    constructor(name, zip, subjects, distance, img_path) {
        this.__name = name;
        this.__zip = zip;
        this.__subjects = subjects;
        this.__distance = distance;
        this.__img_path = img_path;
    }
    get name() {
        return this.__name;
    }
    set name(x) {
        this.__name = x;
    }
    get zip() {
        return this.__zip;
    }
    set zip(x) {
        this.__zip = x;
    }
    get subjects() {
        return this.__subjects;
    }
    set subjects(x) {
        this.__subjects = x;
    }
    get distance() {
        return this.__distance;
    }
    set distance(x) {
        this.__distance = x;
    }
    get img_path() {
        return this.__img_path;
    }
    set img_path(x) {
        this.__img_path = x;
    }
    prettyPrintSubjects() {
        var out = "";
        for (var i = 0; i != this.__subjects.length; ++i)
            out += this.__subjects[i] + ", ";
        return out.substring(0, out.length - 2);
    }

}

class TutorProfile extends Profile {
    constructor(name, zip, subjects, distance, img_path, price) {
        super(name, zip, subjects, distance, img_path);
        this.__price = price;
    }
    get price() {
        return this.__price;
    }
    set price(x) {
        this.__price = x;
    }
}

class StudentProfile extends Profile {
    constructor(name, zip, subjects, distance, img_path, grade) {
        super(name, zip, subjects, distance, img_path);
        this.__grade = grade;
    }
    get grade() {
        return this.__grade;
    }
    set grade(x) {
        this.__grade = x;
    }
}

const SUBJECTS = ["English", "Math", "Biology", "Chemistry", "Physics", "History"];

var tutors = []
var students = []


var tutorProfiles = [
    "Amanda;07030;Math,English;10;src/images/profile-picture2.jpg;20",
    "Brett;07030;English;10;src/images/profile-picture2.jpg;15",
    "Kanye;07030;Computer Science;10;src/images/profile-picture2.jpg;10",
    "Claire;07030;Physics;10;src/images/profile-picture2.jpg;15"
];

var studentProfiles = [
    "Amanda;07030;Math,English;10;src/images/profile-picture2.jpg;11",
    "Brett;07030;English;10;src/images/profile-picture2.jpg;12",
    "Kanye;07030;Computer Science;10;src/images/profile-picture2.jpg;10",
    "Claire;07030;Physics;10;src/images/profile-picture2.jpg;9"
];

function generateProfile(profile) {
    var newProfile = document.createElement("div");
    newProfile.className = "profile";

    var name = document.createElement("div");
    var nameContent = document.createTextNode(profile.name);
    name.className = "header";
    name.appendChild(nameContent);

    var img = document.createElement("img");
    img.className = "hero";
    img.alt = profile.name.toLowerCase();
    img.src = profile.img_path;

    var subjects = document.createElement("div");
    subjects.className = "grey";
    var subjectsContent = document.createTextNode("Specializes in: " + profile.prettyPrintSubjects());
    subjects.appendChild(subjectsContent);

    var price = null;
    var grade = null;

    if (profile instanceof TutorProfile) {
        var price = document.createElement("div");
        price.className = "grey";
        var priceContent = document.createTextNode("$" + profile.price.toString() + " / hr");
        price.appendChild(priceContent);
    } else {
        var grade = document.createElement("div");
        grade.className = "grey";
        var gradeContent = document.createTextNode("Grade: " + profile.grade);
        grade.appendChild(gradeContent);
    }

    newProfile.appendChild(img);
    newProfile.appendChild(name);
    if (price == null)
        newProfile.appendChild(grade);
    else
        newProfile.appendChild(price);
    newProfile.appendChild(subjects);

    document.getElementById("profiles").appendChild(newProfile);

}



window.addEventListener("load", function () {
    //    var pageName = location.href.split("/".slice(-1));


    if (sessionStorage.isTutor) {
        for (var i = 0; i != tutorProfiles.length; ++i) {
            var params = tutorProfiles[i].split(";");
            var subjects = params[2].split(",");
            console.log(subjects);
            tutors.push(new TutorProfile(params[0], params[1], subjects, params[3], params[4], params[5]));
        }
        for (var i = 0; i != tutors.length; ++i) {
            generateProfile(tutors[i]);
            // console.log(tutors[i]);
        }
    } else {
        for (var i = 0; i != studentProfiles.length; ++i) {
            var params = studentProfiles[i].split(";");
            var subjects = params[2].split(",");
            console.log(subjects);
            students.push(new StudentProfile(params[0], params[1], subjects, params[3], params[4], params[5]));
        }
        for (var i = 0; i != students.length; ++i) {
            generateProfile(students[i]);
            // console.log(tutors[i]);
        }
    }


});