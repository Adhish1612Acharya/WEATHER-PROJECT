import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { colors } from '@mui/material';


export default function SearchBox({sendData}){
 let [city,setCity]=useState("");
 let [error,setError]=useState(false);

 const API_URL="https://api.openweathermap.org/data/2.5/weather"
 const API_KEY=import.meta.env.VITE_API_SECRET_KEY;

 let getWeather=async ()=>{
   try{
      let data=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonData=await data.json();
      let result={
         city : city,
         temp : jsonData.main.temp,
         tempMax : jsonData.main.temp_max,
         tempMin : jsonData.main.temp_min,
         humidity : jsonData.main.humidity,
         feelsLike : jsonData.main.feels_like,
         description : jsonData.weather[0].description
      }
      return result;
   }catch(err){
      throw err;
   }
 }
 
 let handleChange=(event)=>{
    setCity(event.target.value);
 }

 let handleForm=async (event)=>{
   try{
      event.preventDefault();
      setCity("");
      let data=await getWeather();
      sendData(data);
   }catch(err){
      setError(true);
      sendData(err);
   } 
 }

 let changeError=()=>{
   setError(false)
 }

    return (
        <div className="SearchBox">
         <h3>Search for Weather</h3>
         <form onSubmit={handleForm}>
         <TextField id="searchBox" 
         label="City name" 
         variant="outlined" 
         value={city} 
         onChange={handleChange}
         required/>
         <br></br>
         <br></br>
         <Button variant="contained" type="submit" onClick={changeError}>Search</Button>
         </form>
         {error && <p style={{color:"red"}}>No such place exists</p>}
        </div>
    );
}