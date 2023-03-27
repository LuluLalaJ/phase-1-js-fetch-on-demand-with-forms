const moviesURL = "http://localhost:3000/movies/"

const init = () => {
  const inputForm = document.querySelector('form');
  inputForm.addEventListener('submit', event => {
    event.preventDefault();
    const input = document.getElementById("searchByID")
    // input.reset(); 

    fetch(moviesURL + `${input.value}`)
        .then(response => response.json())
        .then(movieData => {
            const movieSection = document.getElementById('movieDetails')
            const title = movieSection.querySelector('h4')
            const summary = movieSection.querySelector('p')
            
            title.textContent = movieData.title;
            summary.textContent = movieData.summary;
        })
  })

}

document.addEventListener('DOMContentLoaded', init);


