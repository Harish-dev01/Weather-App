import React from 'react'
import { useState } from 'react'
import axios from 'axios'




function Weather() {

    const [city,setcity] = useState ("")
    const [weather,setweather] = useState ("")
    const [temp,settemp] = useState("")
    const [des,setdes] = useState("") 

 function handlechange(evt){
setcity(evt.target.value)
 }

 function getweather(){
var weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=160fcc78fb5ad4910301181e27db3bea`)
weatherdata.then(function(success){
    console.log(success.data)
    setweather(success.data.weather[0].main)
    settemp(success.data.main.temp)
    setdes(success.data.weather[0].description)
})
 }
  return (
    <div class="bg-gray-100 flex justify-center items-center h-screen">
   <div class="container mx-auto text-center">
        <h1 class="text-3xl font-semibold mb-4">Weather App</h1>
        <div class="weather-card bg-white rounded-lg shadow-md p-6 max-w-xs mx-auto">
            <input type="text" onChange={handlechange} class="mb-4 px-4 py-2 block w-full border rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter city name"></input>
            <button onClick={getweather} class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">Get Weather</button>
            <h2 class="text-xl font-semibold mt-4">Weather : {weather}</h2>
            <div class="weather-info mt-2">
                <div class="text-4xl font-bold mb-2 ">0°C : {temp}</div>
                <div class="text-lg ">Description : {des}</div>


    </div>
    </div>
    </div>
    </div>
  )
}

export default Weather