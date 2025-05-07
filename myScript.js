const goToFormButton = document.querySelector("#go-to-form-btn");

// function toggleMenu(x) {
//   x.classList.toggle("change");
//   const navbar = document.querySelector(".navbar");
//   navbar.classList.toggle("show");
// }
goToFormButton.addEventListener("click", function (e) {
  e.preventDefault();
  form.scrollIntoView();
});


