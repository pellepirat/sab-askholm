document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signup-form");
    const message = document.getElementById("message");
  
    signupForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const emailInput = document.getElementById("email");
      const email = emailInput.value;
  
      // Perform some validation on the email (optional)
  
      // Simulate a request to a server
      // Replace this with actual AJAX request to your backend
      setTimeout(() => {
        message.textContent = `Thank you for signing up with email: ${email}`;
      }, 1000);
  
      // Clear the input field
      emailInput.value = "";
    });
  });


  var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}