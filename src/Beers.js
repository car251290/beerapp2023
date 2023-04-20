// PACKAGES
import { useEffect, useState } from "react";
// COMPONENTS
import BeerTeaser from "../Components/BeerTeaser";
import Footer from "../Components/Footer";

// ----------> FUNCTION FOR BEERS PAGE

const Beers = () => {
  const [beers, setBeers] = useState([]);

  useEffect(()=> {
   const fetchData = async () =>{
    const res = await fetch("https://ih-beers-api2.herokuapp.com/beers")
    const data = await res.json()
    setBeers(data);
   }
   fetchData()
    
    
  })

  //useEffect(() => {
   // const fetchData = async() => {
   //   const data = await fetch("https://ih-beers-api2.herokuapp.com/beers")
   //   if(!data.ok) throw new Error(data.statusText)
   //   setBeers(data.json());
   // }
   //   fetchData()
  //}, []);
  return (
    <>
      <main>
        {beers.map((beer, index) => (
          <BeerTeaser
            key={"BeerDetails" + index}
            beerImage={beer.image_url}
            beerName={beer.name}
            beerTagline={beer.tagline}
            beerRoute={beer._id}
          />
        ))}
      </main>
      <Footer />
    </>
  );
};

export default Beers;
