import disneyMoviesData from './disneyPlusMoviesData.json';

export function getMoviesDataArray() {
    const moviesData = [];
    const recommends = [];
    const newDisney = [];
    const originals = [];
    const trending = [];
    Object.entries(disneyMoviesData.movies).forEach((movie) => {
        const [key, value] = movie;
        moviesData.push({ id: key, ...value });
      });

    // add movies in each movie type array according to movie type
    moviesData.map(movie => {
        switch(movie.type) {
          case "recommend": 
            recommends.push({...movie});
            break;
          case "new":
            newDisney.push({...movie});
            break;
          case "original":
            originals.push({...movie});
            break;
          case "trending":
            trending.push({...movie});
            break;
          default :
            console.log("something wrong in switch case");
        }
        return moviesData;
    });

    return [recommends, newDisney, originals, trending];
}

export function getMoviesDataObject(id){
    let movieData ={};
    Object.entries(disneyMoviesData.movies).forEach((movie) => {
        const [key, value] = movie;
        if(id === key){
            movieData = {...value};
        }
      });
    
    return movieData;
}

export function getViewerData(){
    let viewerData = [];
    Object.entries(disneyMoviesData.viewer).forEach((movie) => {
        const [key, value] = movie;
        viewerData.push({ id: key, ...value });
      });
    
      return viewerData;
}