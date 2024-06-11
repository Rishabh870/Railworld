document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggle-button");
  const navbarLinks = document.getElementById("navbar-links");

  const signupButton = document.getElementById("signup-button");
  const signupButtonMobile = document.getElementById("signup-button-mobile");
  const modal = document.getElementById("modal");
  const closeButton = document.getElementById("close-button");
  const signupForm = document.getElementById("signup-form");

  toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
  });

  function toggleModal() {
    modal.classList.toggle("show");
  }

  function closeForm() {
    modal.classList.remove("show");
  }

  signupButton.addEventListener("click", toggleModal);
  signupButtonMobile.addEventListener("click", toggleModal);
  closeButton.addEventListener("click", closeForm);

  const carousal = document.querySelectorAll("#carousel-slide img");
  let index = 0;

  function slide() {
    carousal[index].classList.remove("active");
    index = (index + 1) % carousal.length;
    carousal[index].classList.add("active");
  }

  setInterval(slide, 2000);

  const form = document.getElementById("signup-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log("Form Data:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  });
});
