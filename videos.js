
// Getting movie with API key from OMDB
// fetching data from and passing the movie name
const getMovie = (movieTitle, movies) => {
    return fetch(`https://www.omdbapi.com/?t=${movieTitle}&apikey=2ac081dd`)
        .then(response => {
            //response.json() – parse the response as JSON
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            //Outputs a warning message to the Web Console.
            console.warn(error);
        });
};

//Array of movies
const favMovies = [
    "Deadpool 2",
    "Game of Thrones",
    "Joker",
    "Avengers: Endgame",
    "Ford v Ferrari"
];

const movies = [];
let output = "";

//The console method log() outputs a message to the web console
console.log(output);

getMovie(favMovies[0])
    .then(movie => movies.push(movie))
    .then(() => getMovie(favMovies[1]))
    .then(movie => movies.push(movie))
    .then(() => getMovie(favMovies[2]))
    .then(movie => movies.push(movie))
    .then(() => getMovie(favMovies[3]))
    .then(movie => movies.push(movie))
    .then(() => getMovie(favMovies[4]))
    .then(movie => movies.push(movie))
    .then(() => {
        console.log(2, movies);

        //The Document method querySelector() returns the first Element within the document that 
        // matches the specified selector, or group of selectors
        const listContainer = document.querySelector(".films");

        movies.forEach(movie => {
            const markup = `
            
        <li>
          <h3>${movie.Title}</h3>
          <img src=${movie.Poster}></img>
          <p>${movie.Plot}</p>
          <p>${movie.Year}</p>
          <p>IMDB Rating : ${movie.imdbRating}</p>
        </li>
        `;

            //the value of innerHTML lets you easily replace the existing contents of an element with new content
            listContainer.innerHTML += markup;
        });
    })

