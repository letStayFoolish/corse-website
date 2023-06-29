// Add custom JavaScript here

const navbarCollapse = document.querySelector('.navbar-collapse')
const navbar = document.querySelector('.navbar');
function useScroll() {

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('bg-dark')
    } else {
      navbar.classList.remove('bg-dark')
    }
  })


}
navbar.addEventListener('onmouseleave', () => navbarCollapse.style.visibility = 'hidden')

document.addEventListener('DOMContentLoaded', useScroll)