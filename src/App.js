import './App.css';
import Display from './components/Display';
import Home from './components/Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Movie from './components/Movie';
import CastMovie from './components/CastMovie';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={""} element={<Home></Home>}/>
          <Route path={"/disp/:movie"} element={<Display></Display>}/>
          <Route path={"/movie/:movieId"} element={<Movie></Movie>}/>
          <Route path={"/actor/:actorId"} element={<CastMovie></CastMovie>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
