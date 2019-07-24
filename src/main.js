//Buscar la data en la internet
// fetch('https://raw.githubusercontent.com/carolgmonteiro/SCL010-data-lovers/master/src/data/pokemon/pokemon.json')
//       .then(response => 
//        response.json())
//       .then(data => {

// //criar variable para linkear la con la data Pokemon en JASON
// // const pokeData = data.pokemon;
// const movieData = data.movies;
// variable para la busqueda de pokemon o condicion
let searchMovie;
// // variable para el valor del orden
// // let orderValue;
// //VARIABLE PARA IMPRIMIR LOS CARDS
let cardGallery = "";
const movieResult = document.getElementById("cards-container");
// const pokeStatsResult = document.getElementById("pokeStats");
// //IMPRIMIR CARDS EN LA GALERIA 
//  const showGallery = (data) => {
//   for (let i = 0; i < data.length; i++){
//     cardGallery +=
//     //onclick="showModal(${data[i].id})"
//      `<div class="card" style="width: 210px;" data-toggle="modal">
//      <h3 class="card-title">${data[i].num} ${data[i].name}</h3>
//      <img class="card-img-top" src=${data[i].img} alt="Card image cap">
//      <div class="card-body">
//      <p class="card-text">Tipo: ${data[i].type}</p>
//      <p class="card-text">Debilidad: ${data[i].weaknesses}</p>
//      <p class="card-text">Freq. horária: ${data[i].spawn_time}hrs</p>
//      </div>
//      </div>`
//     } pokeResult.innerHTML = cardGallery;
//   };

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

// //CARDS DE PELICULAS EN LA GALERIA EN ORDEN ALEATORIA
// const randomData = (data)=>{
//   return data.sort(() => Math.random() - 0.5)
// };
// showGallery(randomData(pokeData));

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

// //PoketGo Home (down)
// document.getElementById("btnBackHome1").addEventListener ("click", ( ) => {
//   cardGallery ="";
//   pokeStatsResult.innerHTML = "";
//   document.getElementById("home").style.display = "block";
//   document.getElementById("headerInfo").style.display = "block";
//   document.getElementById("allPokemons").style.display = "block";
//   document.getElementById("poketGo").style.display = "none";
// });

// //FILTRO POR GENERO
// document.getElementById("slctFilterType").addEventListener ("change", ( ) => {
//   cardGallery ="";
//   pokeStatsResult.innerHTML = "";
//   searchPokemon = document.getElementById("slctFilterType").options[document.getElementById("slctFilterType").selectedIndex].value;
//   //Imprimir la estadistica por tipo
//   pokeStatsResult.innerHTML = window.dataPokemon.computeStats(pokeData, searchPokemon);
//   //Imprimir el resultado por tipo
//   showGallery(window.dataPokemon.filterData(pokeData, searchPokemon));
// });
// //FILTRO POR DIRECTOR
// document.getElementById("slctFilterWeaknesses").addEventListener ("change", ( ) => {
//   cardGallery ="";
//   pokeStatsResult.innerHTML = "";
//   //Guardar la selección del usuario
//   searchPokemon = document.getElementById("slctFilterWeaknesses").options[document.getElementById("slctFilterWeaknesses").selectedIndex].value;
//   //Imprimir el resultado por debilidad
//   showGallery(window.dataPokemon.filterData(pokeData, searchPokemon));
// });
// //FILTRO ORDEN
// document.getElementById("slctFilterOrder").addEventListener ("input", ( ) => {
//   cardGallery ="";
//   pokeStatsResult.innerHTML = "";
//   //Guardar la selección del usuario
//   orderValue = document.getElementById("slctFilterOrder").value;
// if (orderValue == "AZ") {
//   showGallery(window.dataPokemon.sortData(pokeData, "name", "ascendente"));
// } else if (orderValue == "ZA") {
//   showGallery(window.dataPokemon.sortData(pokeData, "name", "descendente"));
// } else if (orderValue == "1-151") {
//   showGallery(window.dataPokemon.sortData(pokeData, "number", "ascendente"));
// } else if (orderValue == "151-1") {
//   showGallery(window.dataPokemon.sortData(pokeData, "number", "descendente"));
// }
// });


// });