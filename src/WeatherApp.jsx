import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import "./WeatherApp.css";
import { useState } from 'react';

export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo]=useState({});

    let updateinfo=(data,err)=>{
        if(err){
            setWeatherInfo({});
        }
        else{
            setWeatherInfo(data);
        }
    }

    return (
        <div className="weatherapp">
            <h1>Weathet App</h1>
            <SearchBox sendData={updateinfo} />
            <InfoBox info={weatherInfo}/>
        </div>
    )
}