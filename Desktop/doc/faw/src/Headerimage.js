import React, { useEffect, useState } from 'react' 
import App from "./App.js"
import './App.css';
import mostcloud from "../src/weather-icons/mostlycloudy.svg"
import clear from "../src/weather-icons/clear.svg"

import drizzle from "../src/weather-icons/drizzle.svg"
import fog from "../src/weather-icons/fog.svg"
import partlycloudy from "../src/weather-icons/partlycloudy.svg"
import rain from "../src/weather-icons/rain.svg"
import snow from "../src/weather-icons/snow.svg"
import storm from "../src/weather-icons/storm.svg"
export default function Headerimage(props) {

    const image = () =>{

        console.log(props.id)
         if (props.id<300) {
            return (
              <div>     <img src={storm} alt='mostly-clouded' className='svg'/></div>
            )
          }


          else if (props.id>300 && props.id<499) {
            return (
              <div>     <img src={drizzle} alt='mostly-clouded' className='svg'/></div>
            )
          }

          else if (props.id>499 && props.id<599) {
            return (
              <div>     <img src={rain} alt='mostly-clouded' className='svg'/> </div>
            )
          }
          else if (props.id>599 && props.id<699) {
            return (
              <div>     <img src={snow} alt='mostly-clouded' className='svg'/> </div>
            )
          }
          else if (props.id>699 && props.id<799) {
            return (
              <div>       <img src={fog} alt='mostly-clouded' className='svg'/> </div>
            )
          }

          else if (props.id==800) {
            return (
              <div>      <img src={clear} alt='mostly-clouded' className='svg'/> </div>
            )
          }
          else if (props.id == 801) {
            return (
              <div>      <img src={partlycloudy} alt='mostly-clouded' className='svg'/> </div>
            )
          }




          else{
              return (<div>      <img src={mostcloud} alt='mostly-clouded' className='svg'/>  </div>)
          }
    }
    return(

<div>



    {image()}
</div>




    )
}