document.addEventListener("DOMContentLoaded", function () {
  var email = document.getElementById("email");
  var confirm = document.getElementById("confirm");

  function confirmEmail() {
    if (email.value !== confirm.value) {
      confirm.setCustomValidity("Emailad dresses must match.");

      confirm.style.borderColor = "red";

      alert("Email addresses must match before proceeding");
    } else {
      confirm.setCustomValidity("");

      confirm.style.borderColor = "green";

      alert("Emails match, hit submit to post your comment");
    }
  }

  email.addEventListener("change", confirmEmail);
  confirm.addEventListener("change", confirmEmail);
});
