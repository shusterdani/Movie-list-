
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

    let movie = {
        movieName: title,
        directorName: director,
        description: desc
    };

    moviesList.push(movie);
}

function displayMovie() {
    let content = "";
            for(let i = 0; i < moviesList.length; i++) {
            const tr = `
                <tr class="parentRow">
                    <td>${moviesList[i].title}</td>
                    <td>${moviesList[i].director}</td>
                    <td>${moviesList[i].desc}</td>
                    <td><button onclick="deleteMovie(${i})">X</button></td>
                    <td><button onclick="editMovie(${i})" class="edit-btn">✍🏻</button></td>
                </tr>            
            `;
            content += tr;
        }
    containerTbody.innerHTML = content;
}

function editMovie(index) {
    let editArea = "";
    for(let i = 0; i < moviesList.length; i++) {
        if(i === index){    
            const tr = `
                <tr class="parentRow">
                    <td> <input type="text" placeholder="${moviesList[i].title}" id="movieName"</td>
                    <td> <input type="text" placeholder="${moviesList[i].director}"</td>
                    <td> <input type="text" placeholder="${moviesList[i].desc}"</td>
                    <td><button onclick="saveBack(${i})" class="save-back">📥</button></td>
                    <td><button onclick="saveBack(${i})" class="save-back">🔙</button></td>
                </tr>  
            `
            editArea += tr;
        }
    }
    containerTbody.innerHTML = editArea;
}

// function saveBack(index) {
   
// }



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