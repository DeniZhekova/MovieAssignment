//Comment:
//this code is followed by a tutorial of Ryan Mulligan
//made for frontEnd class assignment


// getElementById() returns an Element object representing the 
// element whose id property matches the specified string.

const movieData = document.getElementById('movie-data');
const input = document.getElementById('movie-search');
const key = '2ac081dd';
const defaultTitle = 'Joker';
const url = `https://www.omdbapi.com/?apikey=${key}&t=`;

const movieDataTpl = (movie) => {
  let actors = movie.Actors.split(',');

  return `
    <div class="movie__poster">
      <span class="movie__poster--fill">
        <img src="${movie.Poster}" />
      </span>
      <span class="movie__poster--featured">
        <img src="${movie.Poster}" />
      </span>
    </div>
    <div class="movie__details">
      <h2 class="movie__title">${movie.Title}</h2>
      <ul class="movie__tags list--inline">
        <li class="movie__rated">${movie.imdbRating}</li>
        <li class="movie__year">${movie.Year}</li>
        <li class="movie__year">${movie.Genre}</li>
      </ul>
      <p class="movie__plot">${movie.Plot}</p>
      <div class="movie__credits">
        <p><strong>Written by:</strong> ${movie.Writer}</p>
        <p><strong>Directed by:</strong> ${movie.Director}</p>
        <p><strong>Starring:</strong></p>
        <ul class="movie__actors list--inline">
          ${actors.map(actor => `<li>${actor}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;
};

// What do when the request fails
// If there is no movie to be found
const noResultsTpl = () => {
  return `
    <div class="movie__no-results">
      <h2>No results</div>
    </div>
  `;
};

// This fetch is retrieves all of the specified data from OMDB by title
// Sends a JSON response composed of the specified data.
// The innerHTML gives you the opportunity to change the page's content 
// without refreshing the page. 

const findMovie = (title) => {
  fetch(url + title, {
    method: 'get',
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    movieData.innerHTML = movieDataTpl(data);
  }).catch(function (err) {
    // What do when the request fails
    movieData.innerHTML = noResultsTpl();
  });
}

//Display a default Movie 
findMovie(defaultTitle);

//Defining that after title input keypress (enter) = 13 will trigger the search function
input.addEventListener('keypress', (e) => {
  if (e.keyCode === 13 && input.value) findMovie(input.value);
});
