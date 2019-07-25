// VARIABLE PARA DATA DE PELICULAS
const movieData = window.MOVIES.movies;
// variable para la busqueda de peliculas o condicion
let searchMovie;
// variable para el valor del orden
let orderValue;
// //VARIABLE PARA IMPRIMIR LOS CARDS
let cardGallery = "";
let cardGallerySuggest = "";
const movieResult = document.getElementById("cards-container");
const movieSuggestion = document.getElementById("cardsSuggestions");
const suggestionResult = document.getElementById("cardsSuggest");
const movieCards = document.getElementById("cards-container")

//IMPRIMIR CARDS EN LA GALERIA 
 const showGallery = (movieData) => {
  for (let i = 0; i < movieData.length; i++){
    cardGallery +=
    //onclick="showModal(${data[i].id})"
     `<div class="movie-card" style="width: 210px; height: 400px;" data-toggle="modal">
     <img class="movie-card img" src=${movieData[i].Poster} alt="Card image cap">
     <h3 class="movie-name">${movieData[i].Title} ${movieData[i].Year}</h3>
     <div class="movie-body">
     <p class="movie-text">Genre: ${movieData[i].Genre}</p>
     <p class="movie-text">Director: ${movieData[i].Director}</p>
     <p class="movie-text">Runtime: ${movieData[i].Runtime}</p>
     </div>
     </div>`
    } movieCards.innerHTML = cardGallery;
  };

  const showGallerySuggest = (data) => {
    cardGallerySuggest +=
    //onclick="showModal(${data[i].id})"
    `<div class="movie-card" style="width: 210px; height: 400px;" data-toggle="modal">
    <img class="movie-card img"src=${data.Poster} alt="Card image cap">
    <div clas="movie-body">
    <h3 class="movie-name">${data.Title} ${data.Year}</h3>
    <p class="movie-text">Genre: ${data.Genre}</p>
    <p class="movie-text">Director: ${data.Director}</p>
    <p class="movie-text">Runtime: ${data.Runtime}</p>
    </div>
    </div>`;
    suggestionResult.innerHTML = cardGallerySuggest;
  };
//FUNCION PARA IMPRIMIR DESDE BUSCAR
const showGallerySearch = (data) => {
  cardGallery +=
  //onclick="showModal(${data[i].id})"
  `<div class="movie-card" style="width: 210px; height: 400px;" data-toggle="modal">
   <img class="movie-card img"src=${data.Poster} alt="Card image cap">
   <div clas="movie-body">
   <h3 class="movie-name">${data.Title} ${data.Year}</h3>
   <p class="movie-text">Genre: ${data.Genre}</p>
   <p class="movie-text">Director: ${data.Director}</p>
   <p class="movie-text">Runtime: ${data.Runtime}</p>
   <p class="movie-text">Actors: ${data.Actors}hrs</p>
   </div>
   </div>`;
  movieResult.innerHTML = cardGallery;
};
//CARDS DE PELICULAS EN LA GALERIA EN ORDEN ALEATORIA
const randomData = (movieData)=>{
  return movieData.sort(() => Math.random() - 0.5)
};
showGallery(randomData(movieData));
//BUSCAR POR NOMBRE DE PELÍCULA
document.getElementById("search-btn").addEventListener("click", ()=> {
  if(document.getElementById("searchMovie").value) {
    cardGallery = "";
    movieResult.innerHTML = "";
    let nameFilm = document.getElementById("searchMovie").value;
    const urlStatic = "http://www.omdbapi.com/?apikey=972bb7&plot=full&t=";
    let urlFilm = urlStatic + nameFilm;
    let jsonObj = JSON.parse(window.movieData.standardHttpGetRequest(urlFilm)); //Convierto el archivo json del url en un objeto
    showGallerySearch(jsonObj);
  }
});
//SUGERENCIA DE PELICULAS
let feelingOption = "";
let timeOption = "";
let arrayMoviesByGenre = [];
let arrayMoviesByTime = [];
//Home para Sentimiento
document.getElementById("start-btn").addEventListener ("click", ( ) => {
  document.getElementById("home").style.display = "none";
  document.getElementById("feeling").style.display = "block";
});
//Curioso para tiempo
document.getElementById("curious-btn").addEventListener ("click", ( ) => {
  feelingOption = "Sci-Fi";
  console.log("feelingOption: "+feelingOption);
  arrayMoviesByGenre = returnMoviesByGenre();
  document.getElementById("feeling").style.display = "none";
  document.getElementById("time").style.display = "block";
//Guardar la selección del usuario
searchMovie = document.getElementById("curious-btn").value;
console.log(searchMovie);
});
//Happy para tiempo
document.getElementById("happy-btn").addEventListener ("click", ( ) => {
  feelingOption = "Comedy";
  console.log("feelingOption: "+feelingOption);
  arrayMoviesByGenre = returnMoviesByGenre();
  document.getElementById("feeling").style.display = "none";
  document.getElementById("time").style.display = "block";
});
//Sad para tiempo
document.getElementById("sad-btn").addEventListener ("click", ( ) => {
  feelingOption = "Drama";
  console.log("feelingOption: "+feelingOption);
  arrayMoviesByGenre = returnMoviesByGenre();
  document.getElementById("feeling").style.display = "none";
  document.getElementById("time").style.display = "block";
});
//In a hurry para suggestion
document.getElementById("hurry-btn").addEventListener ("click", ( ) => {
  timeOption = "hurry-btn";
  console.log("timeOption: "+timeOption);
  arrayMoviesByTime = returnMoviesByTime(arrayMoviesByGenre);
  showDataMoviesByTime(arrayMoviesByTime);
  document.getElementById("time").style.display = "none";
  document.getElementById("cardsSuggestions").style.display = "flex";
  document.getElementById("cardsSuggest").style.display = "flex";
});
//OK para suggestion
document.getElementById("ok-btn").addEventListener ("click", ( ) => {
  timeOption = "ok-btn";
  console.log("timeOption: "+timeOption);
  arrayMoviesByTime = returnMoviesByTime(arrayMoviesByGenre);
  showDataMoviesByTime(arrayMoviesByTime);
  document.getElementById("time").style.display = "none";
  document.getElementById("cardsSuggestions").style.display = "flex";
  document.getElementById("cardsSuggest").style.display = "flex";
});
//OK para suggestion
document.getElementById("relaxed-btn").addEventListener ("click", ( ) => {
  timeOption = "relaxed-btn";
  console.log("timeOption: "+timeOption);
  arrayMoviesByTime = returnMoviesByTime(arrayMoviesByGenre);
  showDataMoviesByTime(arrayMoviesByTime);
  document.getElementById("time").style.display = "none";
  document.getElementById("cardsSuggestions").style.display = "flex";
  document.getElementById("cardsSuggest").style.display = "flex";
});
let returnMoviesByGenre = ()=> {
  let arrayGenres = [];//guardo aquí las pelis del genero escogido
  for(let i=0; i< movieData.length; i++) {
    let arrayGenresOfThisMovie = movieData[i].Genre.split(", ")//transformar string generos en array generos
    for(let j=0; j<arrayGenresOfThisMovie.length; j++) {
      if(!(feelingOption.localeCompare(arrayGenresOfThisMovie[j]))){
        arrayGenres.push(movieData[i]);
        break;
      }
    }
  }
  return arrayGenres;
}

let returnMoviesByTime = (arrayMovies)=> {
  let arrayTime = [];

  for(let i=0; i<arrayMovies.length; i++) {
    let runtimeMovie = arrayMovies[i].Runtime;
    let obtainNumberOfRuntime = runtimeMovie.split(" ");//"103 min" => ["103", "min"]
    runtimeMovie = obtainNumberOfRuntime[0];
    let numberRuntimeMovie = parseInt(runtimeMovie);//numero de minutos de la película

    let comparacionHurry = timeOption == "hurry-btn";
    let comparacionOk = timeOption == "ok-btn";

    if (comparacionHurry) {
      if (numberRuntimeMovie < 120) {
        arrayTime.push(arrayMovies[i]);
      }
    } else if (comparacionOk) {
      if (numberRuntimeMovie >= 120 && numberRuntimeMovie < 130) {
        arrayTime.push(arrayMovies[i]);
      }
    } else { //if (!(timeOption.localeCompare("relaxed-btn"))
      if (numberRuntimeMovie >= 130) {
        arrayTime.push(arrayMovies[i]);
      }
    }
  }
  return arrayTime;
}
//arrayMoviesByTime = returnMoviesByTime(arrayMoviesByGenre);
let showDataMoviesByTime = (arrayData)=> {
  for (let i=0; i<arrayData.length; i++) {
    showGallerySuggest(arrayData[i]);
  }
}
//FILTRO POR GENERO
document.getElementById("slctGenre").addEventListener ("change", ( ) => {
  cardGallery ="";
  searchMovie = document.getElementById("slctGenre").options[document.getElementById("slctGenre").selectedIndex].value;
  // Imprimir el resultado por genero
  showGallery(window.movieData.filterData(movieData, searchMovie));
});
//FILTRO POR DIRECTOR
document.getElementById("slctDirector").addEventListener ("change", ( ) => {
  cardGallery ="";
  //Guardar la selección del usuario
  searchMovie = document.getElementById("slctDirector").options[document.getElementById("slctDirector").selectedIndex].value;
  //Imprimir el resultado por debilidad
  showGallery(window.movieData.filterDirector(movieData, searchMovie));
});
