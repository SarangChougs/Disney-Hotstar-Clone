import styled from "styled-components"
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useEffect, useRef, useState } from "react";
import { getMoviesDataArray } from "../data/data";

export default function Home() {
  const shouldUseEffect = useRef(true);
  const [movies, setMovies] = useState([]); 

  useEffect(() => {
    if(shouldUseEffect.current){
      shouldUseEffect.current = false;
      setMovies(getMoviesDataArray());
    };
  },[movies]);

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