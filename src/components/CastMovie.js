import axios from "axios";
import '../css/CastMovie.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";

const CastMovie =() =>{
    const{actorId}=useParams();
    console.log(actorId)
    const url= `https://imdb-api.com/en/API/Name/k_a4qy7s14/${actorId}`
    const [data, setData]=useState()

    useEffect(()=>{
        axios.get(url).then((res)=>{
            setData(res.data)
            console.log(res.data)
        })
    },[url])
    return(
       
        <div className="item_data">
        { data ? (
            <>
            <img className="item_image" src={data.image} alt="" />
            <h1 className="item_name">{data.name}</h1>
            <h2 className="item_achi">Achivements:{data.awards}</h2>
            <h3>About:{data.summary}</h3>
            {
            
                data.knownFor.map((castmovie)=> {
                    return(
                        <div className="card-mov">
                            <Card key={"castmovie.id"} image={castmovie.image} name ={castmovie.title}/>
                        </div>
                        
                    )
                
                })
            }
            </>
    
    ):(
        "Loading..."
    )}
    </div>
    )
}
export default CastMovie;