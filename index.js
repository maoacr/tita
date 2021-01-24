
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const render = document.getElementById('grid');

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

const getData = async () => {
  const prueba = await fetch('https://api.unsplash.com/search/photos?query=branding&client_id=lpfOyR8gVFph6YaiAPPldxzL8j8hSH7Z7AHhrx4MhWs')
  const response = await prueba.json()
  const { results } = response;
  results.forEach((i) => {
    render.innerHTML += `

    <img  src=${i.urls.small} alt=${i.description} class="image"/>
    `
  })
  }

getData();