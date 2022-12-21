import React from "react"
import './App.css';
import { useState } from "react";
import { useEffect } from "react";
import Footer from "./Footer";

import mostcloud from '../src/weather-icons/mostlycloudy.svg';
import sunclear from '../src/weather-icons/clear.svg';

import Headerimage from "./Headerimage";
import axios from 'axios';


function App() {

const [weatherInfo,setWeatherInfo]=useState();
const [location,setLocation]=useState('');

const [headerid,setheaderid]=useState(null);


const [tempmin,settempmin]=useState();
const [tempmax,settempmax]=useState();
const[humidity,sethumidity]=useState();
const[Pressure,setPressure]=useState();
const [description,setdescription]=useState();


  const [lis,setlis]=useState([])


  const [message, setMessage] = useState('');

  const handleChange = event => {
    setLocation(event.target.value);

    console.log('value is:', event.target.value);
  };



  const dol =`https://api.openweathermap.org/data/2.5/forecast?q=${location}&cnt=8&units=metric&appid=ccde546cfeb486c4e0022c6fda4a4a4d`;

const datagetter= async ()=>{

  const {data} = await axios.get(dol);
  console.log(data)
  setWeatherInfo(data)
  console.log(weatherInfo?.list)

monket();





 



}

const monket =()=>{
  setheaderid(weatherInfo.list[0].weather[0].id)
  settempmin(weatherInfo.list[0].main.temp_min)
  settempmax(weatherInfo.list[0] .main.temp_max)
  sethumidity(weatherInfo.list[0].main.humidity)
  setPressure(weatherInfo.list[0].main.pressure)
  setdescription(weatherInfo.list[0].weather[0].description)
  
}



  return (
    <div className="App">

    <div className='form1'>
        <input      onChange={handleChange} type="text" placeholder="Type in a city name" className="text-city"/>

        <button  onClick={async e=>{await datagetter();setLocation(message)}} className="button"> FIND WEATHER</button>
    
     </div>
     
  <div className="main">
<div className="cloud">
 <Headerimage id={headerid}/>

          <h3>{description}</h3>
          <h2>
            Temperature <span> {tempmin} &deg; to {tempmax} &deg; C</span>
          </h2>
          <p>
            Humidity <span> {humidity} % </span>{" "}
            Pressure
            <span> {Pressure}</span>
          </p>
  </div>



  <div className="comp">


  {weatherInfo?.list.map((hourFrame, index) => (
        <>
        
<Footer  io={hourFrame.weather[0].id} time={hourFrame.dt_txt.split(" ")[1].split(":")[0]} temp={hourFrame.main.temp}/>

        </>
      ))}
      </div>
































            </div>

    </div>
  );
}

export default App;
