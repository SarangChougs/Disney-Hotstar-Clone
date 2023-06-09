import styled from "styled-components"
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";
import disneyMoviesData from '../disneyPlusMoviesData.json';
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const shouldUseEffect = useRef(true);
  const moviesData = useRef(new Array());

  const [movies, setMovies] = useState([]); 
  let recommends = [];
  let newDisney = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    if(shouldUseEffect.current){
      shouldUseEffect.current = false;
      //create array of object from moviesdata json file
      Object.entries(disneyMoviesData.movies).forEach((movie) => {
        const [key,value] = movie;
        moviesData.current.push({id: key, ...value});
      });
      console.log(moviesData)
      
      // add movies in each movie type array according to movie type
      moviesData.current.map(movie => {
        switch(movie.type) {
          case "recommend": 
            recommends.push({id: movie.id, ...movie});
            break;
          case "new":
            newDisney.push({id: movie.id, ...movie});
            break;
          case "original":
            originals.push({id: movie.id, ...movie});
            break;
          case "trending":
            trending.push({id: movie.id, ...movie});
            break;
        }
      });
    }
    setMovies([...movies, recommends, newDisney, originals, trending]);
  }, []);

  return (
    <Container>
        <ImgSlider/>
        <Viewers/>
        <Recommends movies={movies[0]}/>
        <NewDisney movies={movies[1]}/>
        <Originals movies={movies[2]}/>
        <Trending movies={movies[3]}/>
    </Container>
  )
}

const Container = styled.main`
position: relative;
min-height: calc(100vh - 250px);
overflow-x: hidden;
display: block;
top: 72px;
padding: 0 calc(3.5vw + 5px);

&:after {
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
}
`;