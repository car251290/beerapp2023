import {useEffect,useState} from 'react'
import './App.css';

const App= () => {
const [data,setData]= useState([])

useEffect (() => {
    let URL = `https://api.sampleapis.com/beers/ale`
  const fetchData = async () => {
  const data = await fetch(URL)
  const json = await data.json();
  setData(json);
  }

  const result = fetchData()
  .catch(console.error);
  console.log(result)
},[])



  return (
    <>
     <h1>Beer Weekend Information</h1>3
   {data.map((beer)=> 
   <div>
   
    <img src={beer.image} alt="">
    </img>
      <h2>{beer.name}</h2>
      <h3>{beer.price}</h3>
   </div>
    )}
    </>
   
  );
}

export default App;
