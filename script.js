const toggleButton = document.getElementsByClassName('toggle_button')[0]
const navbarLinks = document.getElementsByClassName('navbar_link')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})