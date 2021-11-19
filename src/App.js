
import './App.css';
import Search from './components/Search';
import { useState } from 'react';
import axios from 'axios';
import Results from './components/Results';
import Popup from './components/Popup';



const apiurl="https://www.omdbapi.com/?apikey=62492a24"

function App() {

  const [search,setSearch]=useState({
    s:"",
    results:[],
    selected:{}
  })
  
  const handleClick=(e)=>{
    const s=e.target.value
    
    setSearch(prevState=>{
      return {...prevState, s:s}
      })
  }




const searchMovies = (e) => {
  if (e.key === "Enter") {
    axios(apiurl + "&s=" + search.s).then(({ data }) => {
      let results = data.Search;

      setSearch(prevState => {
        return { ...prevState, results: results }
      })
     
    });
  }
}

const openPopup = id =>{
  axios(apiurl+"&i="+id)
  .then(({data})=>{
    let result=data;

    setSearch(prevState=>{
      return {...prevState, selected:result}
    })
  }
  )}

  const closePopup=()=>{
    setSearch(prevState=>{
      return {...prevState,selected:{}}
    })
  }


  return (
    <div>
     <h1>Movie Database</h1>
<Search handleClick={handleClick} searchMovies={searchMovies}/>

 <Results results={search.results}  openPopup={openPopup}/> 
 {(typeof search.selected.Title != "undefined") ? <Popup selected={search.selected} closePopup={closePopup} /> : false}
    </div>
  );
}

export default App;
