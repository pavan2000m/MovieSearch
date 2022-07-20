import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../css/Movie.css"
const Movie = () =>{
    const {movieId} = useParams();
    const url =`https://imdb-api.com/en/API/Title/k_a4qy7s14/${movieId}`
    const [item, setItem] =useState();
    useEffect(()=>{
        axios.get(url).then((res)=>{
           setItem(res.data);
           //console.log(res.data)
        })
    },[url])
    //console.log(movieId)

    console.log(item)
    
    return(
        <div className="back">
            {item ?(
                <>
                 <div className="movies">
            
            
                 <img className="photo" src={item.image} alt=""/>
                 <h1 className="h1">{item.fullTitle} </h1>
                 <h3 className="h3">{item.genres}</h3>
                 <p>{item.plot}</p>
                     
             </div>
             <div className="data">
                 <h1 className="rate">{item.imDbRating}/10</h1>
                 <h1 className="cast_d">CAST</h1>
                 {
                    item.actorList.map((actor) => {
                        return(
                            <Link to={`/actor/${actor.id}`}>
                            <div className="cast_detail">
                            <img className="cast_photo" src={actor.image} alt=""/>
                            <h4 className="cast">{actor.name} AS {actor.asCharacter}</h4>
                            </div>
                            </Link>
                        )
                       
                    })
                    
                 }
             
             </div>
             </>
            ):(
                "Loading..."
            )
        }
        </div>
    )
}
export default Movie;