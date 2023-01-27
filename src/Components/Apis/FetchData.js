import axios from "axios";

 const getData = async () => {

    //URL=`https://api.sampleapis.com/beers/ale`
    
    try{
        return fetch(`https://api.sampleapis.com/beers/ale`)
        .then(data => data.json())
        
    } catch(err) {
        console.log(err)

        return err;
    }
 }

 export default getData;


