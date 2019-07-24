
// VARIABLE PARA DATA DE PELICULAS
const movieData = window.MOVIES.movies;
// variable para la busqueda de peliculas o condicion
let searchMovie;
// variable para el valor del orden
let orderValue;
// //VARIABLE PARA IMPRIMIR LOS CARDS
let cardGallery = "";
const movieResult = document.getElementById("cards-container");
const movieSuggestion = document.getElementById("cardsSuggestions");
const movieCards = document.getElementById("cards-container")

//IMPRIMIR CARDS EN LA GALERIA 
 const showGallery = (movieData) => {
  for (let i = 0; i < movieData.length; i++){
    cardGallery +=
    //onclick="showModal(${data[i].id})"
     `<div class="movie-card" style="width: 210px; height: 420px;" data-toggle="modal">
     <img class="movie-card img" src=${movieData[i].Poster} alt="Card image cap">
     <h3 class="movie-name">${movieData[i].Title} ${movieData[i].Year}</h3>
     <div class="movie-body">
     <p class="movie-text">Genre: ${movieData[i].Genre}</p>
     <p class="movie-text">Runtime: ${movieData[i].Runtime}</p>
     <p class="movie-text">Director: ${movieData[i].Director}</p>
     </div>
     </div>`
    } movieCards.innerHTML = cardGallery;
  };

//CARDS DE PELICULAS EN LA GALERIA EN ORDEN ALEATORIA
const randomData = (movieData)=>{
  return movieData.sort(() => Math.random() - 0.5)
};
showGallery(randomData(movieData));

//FUNCION PARA IMPRIMIR DESDE BUSCAR
const showGallerySearch = (data) => {
  cardGallery +=
  //onclick="showModal(${data[i].id})"
   `<div class="card" style="width: 210px;" data-toggle="modal">
   <h3 class="card-title">${data.Title} ${data.Year}</h3>
   <img class="card-img-top" src=${data.Poster} alt="Card image cap">
   <div class="card-body">
   <p class="card-text">Genre: ${data.Genre}</p>
   <p class="card-text">Director: ${data.Director}</p>
   <p class="card-text">Awards: ${data.Awards}hrs</p>
   <p class="card-text">Released: ${data.Released}</p>
   <p class="card-text">Runtime: ${data.Runtime}</p>
   <p class="card-text">Actors: ${data.Actors}hrs</p>
   </div>
   </div>`;
  movieResult.innerHTML = cardGallery;
};

//BUSCAR POR NOMBRE DE PELÍCULA
document.getElementById("search-btn").addEventListener("click", ()=> {
  if(document.getElementById("searchMovie").value) {
    cardGallery = "";
    movieResult.innerHTML = "";
    let nameFilm = document.getElementById("searchMovie").value;
    const urlStatic = "http://www.omdbapi.com/?apikey=972bb7&plot=full&t=";
    let urlFilm = urlStatic + nameFilm;
    let jsonObj = JSON.parse(window.dataMovie.standardHttpGetRequest(urlFilm)); //Convierto el archivo json del url en un objeto
    showGallerySearch(jsonObj);
  }
});

//SUGERENCIA DE PELICULAS
//Home para Sentimiento
document.getElementById("start-btn").addEventListener ("click", ( ) => {
  document.getElementById("home").style.display = "none";
  document.getElementById("feeling").style.display = "block";
});
//Curioso para tiempo
document.getElementById("curious-btn").addEventListener ("click", ( ) => {
  document.getElementById("feeling").style.display = "none";
  document.getElementById("time").style.display = "block";
  // cardGallery ="";
//Guardar la selección del usuario
searchMovie = document.getElementById("curious-btn").value;
console.log(searchMovie);
});
//Happy para tiempo
document.getElementById("happy-btn").addEventListener ("click", ( ) => {
  document.getElementById("feeling").style.display = "none";
  document.getElementById("time").style.display = "block";
});
//Sad para tiempo
document.getElementById("sad-btn").addEventListener ("click", ( ) => {
  document.getElementById("feeling").style.display = "none";
  document.getElementById("time").style.display = "block";
});
//In a hurry para suggestion
document.getElementById("hurry-btn").addEventListener ("click", ( ) => {
  document.getElementById("time").style.display = "none";
  document.getElementById("cardsSuggestions").style.display = "block";
});
//OK para suggestion
document.getElementById("ok-btn").addEventListener ("click", ( ) => {
  document.getElementById("time").style.display = "none";
  document.getElementById("cardsSuggestions").style.display = "block";
});
//OK para suggestion
document.getElementById("relaxed-btn").addEventListener ("click", ( ) => {
  document.getElementById("time").style.display = "none";
  document.getElementById("cardsSuggestions").style.display = "block";
});

//FILTRO POR GENERO
document.getElementById("slctGenre").addEventListener ("change", ( ) => {
  cardGallery ="";
  searchMovie = document.getElementById("slctGenre").options[document.getElementById("slctGenre").selectedIndex].value;
//console.log(searchMovie);
  //Imprimir el resultado por genero
  showGallery(window.movieData.filterData(movieData, searchMovie));
});



//FILTRO POR DIRECTOR
document.getElementById("slctDirector").addEventListener ("change", ( ) => {
  cardGallery ="";
  //Guardar la selección del usuario
  searchMovie = document.getElementById("slctDirector").options[document.getElementById("slctDirector").selectedIndex].value;
  //Imprimir el resultado por debilidad
  showGallery(window.movieData.filterData(movieData, searchMovie));
});
//FILTRO ORDEN
document.getElementById("sort-Movie").addEventListener ("input", ( ) => {
  cardGallery ="";
  //Guardar la selección del usuario
  orderValue = document.getElementById("sort-Movie").value;
if (orderValue == "AZ") {
  showGallery(window.movieData.sortData(movieData, "Title", "ascendente"));
} else if (orderValue == "ZA") {
  showGallery(window.movieData.sortData(movieData, "Title", "descendente"));
// } else if (orderValue == "1-151") {
//   showGallery(window.dataPokemon.sortData(pokeData, "number", "ascendente"));
// } else if (orderValue == "151-1") {
//   showGallery(window.dataPokemon.sortData(pokeData, "number", "descendente"));
}
});

