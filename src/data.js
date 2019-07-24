window.movieData = {
    // para filtrar
      filterData: (data, condition) => {
        //console.log("DATA", data);
        let returnArray = [];
        console.log("CONDITION", condition);
        for (let i = 0; i < data.length; i++){
          // let arrayGenres = movieData[i].Genre.split(", ")//transformar string generos en array generos
          // console.log(arrayGenres);
          //filtrar por genero
          if((data[i].Genre).includes(condition)){
            returnArray.push(data[i]);
            //return data.filter(element => element.Genre[0] === condition || element.Genre[1] === condition || element.Genre[2] === condition || element.Genre[3] === condition || element.Genre[4] === condition || element.Genre[5] === condition);
          //filtrar por director
          // } else if ((data[i].Director).includes(condition)){
          //   returnArray.push(data[i]);
          //   //return data.filter(element => element.Director[0] === condition || element.Director[1] === condition || element.Director[2] === condition || element.Director[3] === condition);  
          // }
        }
        // console.log(returnArray);
        return data.filter(element => element.Genre[0] === condition || element.Genre[1] === condition || element.Genre[2] === condition || element.Genre[3] === condition || element.Genre[4] === condition || element.Genre[5] === condition);
      } 
      },
      // sortData: (data, sortBy, sortOrder) => {
      //   let sorted = [];
      //   if (sortBy == "name"){
      //     if(sortOrder == "ascendente"){
      //       sorted = data.sort((a, b) => a.Title.localeCompare(b.Title));
      //     } else if (sortOrder == "descendente"){
      //       sorted = data.sort((a, b) => a.Title.localeCompare(b.Title)).reverse();
      //     } 
      //     return sorted;
      //   }
      //   // if (sortBy == "number"){
      //   //   if(sortOrder == "ascendente"){
      //   //     sorted = data.sort((a, b) => a.num.localeCompare(b.num));
      //   //   } else if (sortOrder == "descendente"){
      //   //     sorted = data.sort((a, b) => a.num.localeCompare(b.num)).reverse();
      //   //   } 
      //   //   return sorted;
      //   // }
      // },
      standardHttpGetRequest: (yourUrl)=> {
        let Httpreq = new XMLHttpRequest(); // a new request
        Httpreq.open("GET",yourUrl,false);
        Httpreq.send(null);
        return Httpreq.responseText;
      }
    };
    