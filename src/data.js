window.movieData = {
    // para filtrar
      filterData: (data, condition) => {
        //console.log("DATA", data);
        let returnArray = [];
        for (let i = 0; i < data.length; i++){
          if((data[i].Genre).includes(condition)){
            returnArray.push(data[i]);
        }
      }
        // console.log(returnArray);
        return returnArray;
      },

      filterDirector: (data, condition) => {
        //console.log("DATA", data);
        let returnArray = [];
        for (let i = 0; i < data.length; i++){
          if((data[i].Director).includes(condition)){
            returnArray.push(data[i]);
        }
      }
        // console.log(returnArray);
        return returnArray;
      },
      
      standardHttpGetRequest: (yourUrl)=> {
        let Httpreq = new XMLHttpRequest(); // a new request
        Httpreq.open("GET",yourUrl,false);
        Httpreq.send(null);
        return Httpreq.responseText;
      }
    };
    