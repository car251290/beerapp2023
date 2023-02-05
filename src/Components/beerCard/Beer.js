import React,{useState,useEffect} from 'react';
import FetchData from '../Apis/FetchData'
;
import "./Beer.css"
const Beer = () => {
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
    <main>

    
  {data.map((beer)=> 
  <section className='beer-details-page'>
   <img src={beer.image} alt=""></img>
   <div className='beer-details'>
   <h2>{beer.name}</h2>
   </div>
   <div className='beer-details'>
    <h3>{beer.price}</h3>
   </div>
  </section>
   )}
   </main>
   </>
    
)
}

export default Beer;