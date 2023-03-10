import React, { useEffect,useState } from "react";
import Footer from "../Components/Footer/Footer";
import BeerTeaser from '../Components/BeerTeaser/BeerTeaser'
const Beer = () => {
    const [beer,setBeers] = useState([]);

    useEffect(()=> {
        fetch(`https://api.punkapi.com/v2/beers`)
        .then((res)=> res.json())
        .then((data)=> setBeers(data));

    },[])

    return (
        <>
        <main>
        {beer.map((beer,index) => (
            <BeerTeaser
            key={"BeerDetails" + index}
            beerImage={beer.image_url}
            beerName={beer.name}
            beerRoute={beer._id}
           />

        ))}
        </main>
         <Footer />
        </>
    )
}

export default Beer;