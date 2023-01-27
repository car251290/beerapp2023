import {useEffect,useState} from 'react'
import './App.css';
import { Card,Grid,Typography,CardContent} from '@mui/material';
import {getData} from './Components/Apis/FetchData'

const App= ({getData}) => {
const [data,setData]= useState([])

//useEffect (() => {
 // const fetchData = async () => {
 // const data = await fetch(`https://api.sampleapis.com/beers/ale`)
 // const json = await data.json();
  //setData(json);
 // }

  //const result = fetchData()
  //.catch(console.error);
//},[])

useEffect(()=> {
  let beers = true;
  getData()
  .then(items => {
    if(beers) {
      setData(items)
    }
  })
  return () => beers = false;
},[])

  return (
    <>
   
<Card elevation ={6} sx={{maxWidh:345}} display="flex">
  <CardContent style = {{backgroundColor:"#F28304"}}>
    {data.map(items => <Typography>
      {items.name}
    </Typography> )}
    {data.map(items => 
    <Grid>
      {items.price}
   </Grid>)}
  </CardContent>
</Card>
    </>
   
  );
}

export default App;
