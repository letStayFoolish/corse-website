// Add custom JavaScript here
function useScroll() {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('bg-dark')
    } else {
      navbar.classList.remove('bg-dark')
    }
  })
}


document.addEventListener('DOMContentLoaded', useScroll)