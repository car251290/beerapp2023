import React from "react";
import "./Details.css";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../Components/Footer/Footer"
import BackButton from "../../Components/BackButton/BackButton";

const Detail = () => {
    let params = useParams();
    const [Detailsbeers,setDetailsBeers] = useState([]);

    useEffect(()=> {
        fetch(`https://api.punkapi.com/v2/beers${params.id}`)
        .then((res)=> res.json())
        .then((data) => setDetailsBeers(data))
    },[params.id])

return (
    <>
    <main>
        <section className="beer-details-page">
          <img src={Detailsbeers.image_url} alt=""></img>
          <h2>{Detailsbeers.name}</h2>
          <h3>{Detailsbeers.tagline}</h3>
          <div className="beer-details">
            <p>First brewed:</p>
            <p>{Detailsbeers.first_brewed}</p>
          </div>
          <div className="beer-details">
            <p>Review :</p>
            <p>{Detailsbeers.description}</p>
          </div>
          <p className="beer-description">{Detailsbeers.attenuation_level}</p>
          <BackButton />
        </section>
      </main>
      <Footer />
    
    </>
)
}
export default Detail;

