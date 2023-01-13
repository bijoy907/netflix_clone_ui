import React from "react";
import CardSlider from "./CardSlider";

const Slider=({movies})=>{

    const getMoviesFromRange =(from,to)=>{
        return movies.slice(from,to);
    }

    return(
        <>
        <CardSlider title="Trending Now" data={getMoviesFromRange(0,10)} />
        <CardSlider title="New Releases" data={getMoviesFromRange(10,20)} />
        <CardSlider title="Trending Movie" data={getMoviesFromRange(20,30)} />
        <CardSlider title="Blockbuster Movie" data={getMoviesFromRange(30,40)} />
        <CardSlider title="Propular On Netflix" data={getMoviesFromRange(40,50)} />
        <CardSlider title="Action Movies" data={getMoviesFromRange(50,60)} /> 
        </>
    )
};
export default Slider;