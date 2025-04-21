
let moviesList = [];

const movieTitle = document.getElementById("movieTitle");
const directorName = document.getElementById("directorName");
const description = document.getElementById("description");
const containerTbody = document.getElementById("containerTbody");

function loadMovies() {
    loadMoviesList();
    displayMovie();
}

function addMovie() {
    pushMovie();
    saveMoviesList();
    displayMovie();
}

function pushMovie() {
    const title = movieTitle.value;
    const director = directorName.value;
    const desc = description.value;

    let movie = {title, director, desc};

    moviesList.push(movie);
}

function displayMovie() {
    let content = "";
            for(let i = 0; i < moviesList.length; i++) {
            const tr = `
                <tr>
                    <td>${moviesList[i].title}</td>
                    <td>${moviesList[i].director}</td>
                    <td>${moviesList[i].desc}</td>
                    <td><button onclick="deleteMovie(${i})">X</button></td>
                </tr>            
            `;
            content += tr;
        }
    containerTbody.innerHTML = content;
}

function saveMoviesList() {
    const json = JSON.stringify(moviesList);
    localStorage.setItem("movies", json);
}

function loadMoviesList() {
    const moviesToStr = localStorage.getItem("movies");
    if(moviesToStr)
       moviesList = JSON.parse(moviesToStr);
}

function deleteMovie(index) {

    moviesList.splice(index, 1);
    displayMovie();
    saveMoviesList();
}