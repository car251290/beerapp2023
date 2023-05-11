// PACKAGES
import { useCallback, useEffect, useState } from "react";

// COMPONENTS
import Teaser from "../../Components/Teaser/Teaser";
import CollapsibleExample from "../CollapseDetails/CollapsibleExample";
import { Collapse } from "react-bootstrap";
const Home = () => {
  const [randomBeer, setRandomBeer] = useState([]);
  const fetchdata = useCallback(async()=> {
    const res = await fetch("https://ih-beers-api2.herokuapp.com/beers/random")
    const data = await res.json()
    setRandomBeer(data);
  },[])
  useEffect(() => {
    fetchdata()
    .catch(err=> console.log(err))
  }, [fetchdata]);
  let imgs = [
    "https://cdn.tasteatlas.com/Images/Ingredients/04ff011869b94faab26dd95b9e923afb.jpg?m=facebook",
    "https://cdnimg.webstaurantstore.com/images/articles/27/types-of-beer-header.jpg",
    //"https://assets.dmagstatic.com/wp-content/uploads/media/1598470/how-to-pick-the-right-beer-glass-guide.png",
    //"https://images.unsplash.com/photo-1518542698889-ca82262f08d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    //"https://images.unsplash.com/photo-1558642891-54be180ea339?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  ];
  return (
    <main>
      <CollapsibleExample
      router={`./Collapse/${Collapse.id}`}
      />
      <Teaser
        route="./beers"
        teaserImage={imgs[0]}
        teaserHeader="All Beers"
        teaserText="Beer is one of the oldest and most widely consumed type of alcoholic drink in the world, and the third most popular drink overall after potable water and tea."
      />
      <Teaser
        route={`./beers/${randomBeer._id}`}
        teaserImage={imgs[1]}
        teaserHeader="Random Beer"
        teaserText="Humans all over the world consume 50 billion gallons of beer each year.
        Budweiser is the world's most famous beer.
        Beer is one of the oldest beverages in the world, dating back to 5000BC!
        The Czech Republic was the first country ever to have a beer museum.."
      />
    </main>
  );
};

export default Home;

