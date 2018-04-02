// var downloadCV = document.getElementById("downloadCV");

// downloadCV.addEventListener("click", function() {
// alert("download cv");
// });
//scroll
// var myNav = document.getElementById("mynav");
// window.onscroll = function() {
//   "use strict";
//   if (document.body.scrollTop >= 5) {
//     myNav.classList.add("nav-colored");
//     myNav.classList.remove("nav-transparent");
//   } else {
//     myNav.classList.add("nav-transparent");
//     myNav.classList.remove("nav-colored");
//   }
// };
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
function addSkills() {
  var programmingList = document.querySelector("#programming-skills");
  var designList = document.querySelector("#desgin-skills");
  var programmingSkills = [];
  var designSkills = [];
  var btn = document.querySelector("#addSkill");

  if (btn != null) {
    btn.addEventListener("click", function() {
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
var myForm = document.getElementById("contact-form");
if (myForm != null) {
  myForm.addEventListener("submit", function(event) {
    event.preventDefault();
    validateForm();
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

  //   var lnameErr = document.querySelector("#lnameErr");
  //   var fnameErr = document.querySelector("#fnameErr");

  if (lname.length < 1 || lname.length >= 25) {
    document.querySelector("#lnameErr").textContent =
      "Your last name is required and less than 25 characters.";
    document.querySelector("#lastname").focus();
  }

  if (fname.length < 1 || fname.length >= 25) {
    document.querySelector("#fnameErr").textContent =
      "Your first name is required and less than 25 charactesr.";
    document.querySelector("#firstname").focus();
  }
  if (email.indexOf("@", 0) < 0 || email.indexOf(".", 0) < 0) {
    emailErr.textContent = "Please enter a valid e-mail address.";
    document.querySelector("#email").focus();
  }
  if (web.length < 1 || website.length >= 50) {
    document.querySelector("#websiteErr").textContent =
      "Your website address is required and less than 50 characters.";
    document.querySelector("#website").focus();
  } else {
    document.querySelector("#websiteErr").textContent = "";
  }
  if (age == null || isNaN(age) || age < 18 || age > 100) {
    ageErr.textContent = "Your age is required and between 18 and 100.";
    document.querySelector("#age").focus();
  } else {
    ageErr.textContent = "";
  }
  if (message.length < 1 || message.length >= 255) {
    messageErr.textContent =
      "Your message is required and less than 255 characters.";
    document.querySelector("#message").focus();
  }
}
