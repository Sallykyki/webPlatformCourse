// var downloadCV = document.getElementById("downloadCV");

// downloadCV.addEventListener("click", function() {
// alert("download cv");
// });

//changing color while scroll
window.addEventListener("scroll", function(e) {
  var nav = document.getElementById("mynav");
  if (nav != null) {
    if (
      document.documentElement.scrollTop ||
      document.body.scrollTop > window.innerHeight
    ) {
      nav.classList.add("nav-colored");
      nav.classList.remove("nav-transparent");
    } else {
      nav.classList.add("nav-transparent");
      nav.classList.remove("nav-colored");
    }
  }
});

// show current date and time

function showTime() {
  var timeMsg = document.querySelector("#currentTime");
  if (timeMsg != null) {
    var today = new Date();
    timeMsg.textContent = today;

    setTimeout(function() {
      showTime();
    }, 500);
  }
}

showTime();

//add skills
var programmingList = document.querySelector("#programming-skills");
var designList = document.querySelector("#desgin-skills");
var programmingSkills = [];
var designSkills = [];

function addSkills() {
  var addBtn = document.querySelector("#addSkill");

  if (addBtn != null) {
    addBtn.addEventListener("click", function() {
      var newskillName = document.querySelector("#skill-name").value;
      var newskillCompetence = document.querySelector("#skill-competence")
        .value;
      var type = document.querySelector("#skill-type").value;

      if (type === "programming") {
        programmingSkills.push({
          name: newskillName,
          competence: Number(newskillCompetence)
        });
        programmingList.innerHTML = renderSkills(programmingSkills);
      }
      if (type === "design") {
        designSkills.push({
          name: newskillName,
          competence: Number(newskillCompetence)
        });
        designList.innerHTML = renderSkills(designSkills);
      }
    });
  }
}

addSkills();

//remove skill
function removeSkill() {
  var removeBtn = document.querySelector("#removeSkill");

  if (removeBtn != null) {
    removeBtn.addEventListener("click", function() {
      var type = document.querySelector("#skill-type-remove").value;

      if (type === "programming") {
        programmingSkills.shift();
        programmingList.innerHTML = renderSkills(programmingSkills);
      }
      if (type === "design") {
        designSkills.shift();
        designList.innerHTML = renderSkills(designSkills);
      }
    });
  }
}
removeSkill();

function renderSkills(skills) {
  var result = "";

  for (var i = skills.length - 1; i >= 0; i--) {
    result += skillElement(skills[i]);
  }

  return result;
}

function skillElement(skill) {
  return (
    "<p>" +
    skill.name +
    "</p>\
  <div class='progress'>\
    <div\
    class='progress-bar'\
    role='progressbar'\
    aria-valuenow='" +
    skill.competence +
    "'\
    aria-valuemin='0'\
    aria-valuemax='100'\
    style='width: " +
    skill.competence +
    "%'>\
    </div>\
  </div>"
  );
}

//submit form
var myForm = document.querySelector("#contact-form");
var submitAlert = document.querySelector("#submit-alert");
if (myForm != null) {
  myForm.addEventListener("submit", function(event) {
    event.preventDefault();
    if (validateForm()) {
      submitAlert.innerHTML =
        '<div class="alert alert-success">\
      <strong>Sent!</strong> Your message has been sent to Huong. Have a nice day!\
    </div>';
      myForm.reset();
    }
  });
}

//validate form
function validateForm() {
  var lname = document.forms["contact-form"]["lastname"].value;
  var fname = document.forms["contact-form"]["firstname"].value;
  var email = document.forms["contact-form"]["email"].value;
  var age = document.forms["contact-form"]["age"].value;
  var web = document.forms["contact-form"]["website"].value;
  var message = document.forms["contact-form"]["message"].value;
  var isValid = true;

  if (lname.length < 1 || lname.length >= 25) {
    document.querySelector("#lnameErr").textContent =
      "Your last name is required and less than 25 characters.";
    document.querySelector("#lastname").focus();
    isValid = false;
  } else {
    document.querySelector("#lnameErr").textContent = "";
  }

  if (fname.length < 1 || fname.length >= 25) {
    document.querySelector("#fnameErr").textContent =
      "Your first name is required and less than 25 charactesr.";
    document.querySelector("#firstname").focus();
    isValid = false;
  } else {
    document.querySelector("#fnameErr").textContent = "";
  }

  if (email.indexOf("@", 0) < 0 || email.indexOf(".", 0) < 0) {
    document.querySelector("#emailErr").textContent =
      "Please enter a valid e-mail address.";
    document.querySelector("#email").focus();
    isValid = false;
  } else {
    document.querySelector("#emailErr").textContent = "";
  }

  if (web.length < 1 || website.length >= 50) {
    document.querySelector("#websiteErr").textContent =
      "Your website address is required and less than 50 characters.";
    document.querySelector("#website").focus();
    isValid = false;
  } else {
    document.querySelector("#websiteErr").textContent = "";
  }

  if (age == null || isNaN(age) || age < 18 || age > 100) {
    document.querySelector("#ageErr").textContent =
      "Your age is required and between 18 and 100.";
    document.querySelector("#age").focus();
    isValid = false;
  } else {
    document.querySelector("#ageErr").textContent = "";
  }

  if (message.length < 1 || message.length >= 255) {
    document.querySelector("#messageErr").textContent =
      "Your message is required and less than 255 characters.";
    document.querySelector("#message").focus();
    isValid = false;
  } else {
    document.querySelector("#messageErr").textContent = "";
  }

  return isValid;
}
// project mouseover and mouseout
var imageHovers = document.getElementsByClassName("image-hover");

for (var i = 0; i < imageHovers.length; i++) {
  (function(x) {
    imageHovers[x].addEventListener("mouseover", function() {
      this.querySelector(".project-description").classList.add("show");
    });

    imageHovers[x].addEventListener("mouseout", function() {
      this.querySelector(".project-description").classList.remove("show");
    });
  })(i);
}
