const scrollTopBtn = document.querySelector('.scroll-top-btn')
const logo = document.querySelector('#logo')
const aboutUs = document.querySelector('#about-us')
const services = document.querySelector('#services')
const portfolio = document.querySelector('#portfolio')
const team = document.querySelector('#team')
const pricing = document.querySelector('#pricing')
const contact = document.querySelector('#contact')

const scrollToTop = () => {
  window.scrollTo({
    behavior: 'smooth',
    top: 0,
  })
}

scrollTopBtn.addEventListener('click', scrollToTop)
logo.addEventListener('click', scrollToTop)

window.addEventListener('click', (e) => {
  const id = e.target.id
  switch (id) {
    case 'home-btn':
      scrollToTop()
      break
    case 'about-us-btn':
      aboutUs.scrollIntoView({
        behavior: 'smooth',
      })
      break
    case 'services-btn':
      services.scrollIntoView({
        behavior: 'smooth',
      })
      break
    case 'portfolio-btn':
      portfolio.scrollIntoView({
        behavior: 'smooth',
      })
      break
    case 'team-btn':
      team.scrollIntoView({
        behavior: 'smooth',
      })
      break
    case 'pricing-btn':
      pricing.scrollIntoView({
        behavior: 'smooth',
      })
      break
    case 'contact-btn':
      contact.scrollIntoView({
        behavior: 'smooth',
      })
      break
  }
})
