import axios from "axios";

 const getData = async (beerData) => {
    
    const response = await fetch(`https://api.sampleapis.com/beers/ale`)
    const data = await response.json();
    beerData(data);


    //URL=`https://api.sampleapis.com/beers/ale`
    
    //try{
      //  return await fetch(`https://api.sampleapis.com/beers/ale`)
        //.then(data => data.json())
        //.then(res => res.data)
        
   // } catch(err) {
     //   console.log(err)
//
  //      return err;
    //}
 }

 export default getData;


