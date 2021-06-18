const burger = document.querySelector('.hamburger');
const navLinks = document.getElementById('nav-links-container');
const contactNavLink = document.getElementById('contact-nav-link')

burger.addEventListener('click', function () {
  burger.classList.toggle('is-active');
  navLinks.classList.toggle('show-nav-links');
})

// Need to hide nav when Contact link is selected while in the home page
contactNavLink.addEventListener('click', function () {
  burger.classList.toggle('is-active');
  navLinks.classList.toggle('show-nav-links');
});