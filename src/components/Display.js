import Card from "./Card.js";
import {Link, useParams} from 'react-router-dom';
import { useEffect, useState } from "react";
import "../css/Display.css";
import axios from "axios";

const Display = ()=> {
  const {movie} =useParams();
  const url = `https://imdb-api.com/en/API/Search/k_a4qy7s14/${movie}`;
  const [data, setData]= useState();
  useEffect(()=>{
    axios.get(url).then((res)=>{
      setData(res.data.results)
       console.log(res.data)
    })
  } ,[url])
    return (
      <div className= "Allitems">{
       data && data.map((movie)=>{
        return(
          <Link to={`/movie/${movie.id}`}>
            <Card key={"movie.id"} image={movie.image} name={movie.title}/>
          </Link>
          
        ) 
        })
      }</div>
      
      
    )
  
}
export default Display;
