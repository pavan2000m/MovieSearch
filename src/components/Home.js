import { useState } from "react";
import "../css/Home.css";
import { Link } from "react-router-dom";


function Home() {

  const [search, setsearch] = useState('');
  console.log(search);
  return (
    
    < div className={"bg"}>
      <h2 className="title">Unlimited Movies, Tv shows and more...</h2>
      
      <input className={"search"} placeholder={"search Movies,Tv shows"} onChange={(e)=> setsearch(e.target.value)}></input>
      <Link to={`/disp/${search}`}><button className="submit">Submit</button></Link>
      
      
    </div>
  )
}

export default Home;