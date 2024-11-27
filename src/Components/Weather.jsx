import { useState } from "react"
import axios from "axios"

function Weather() {
    const [city, setCity] = useState("")

    const [weather, setWeather] = useState("")
    const [tepm, setTemp] = useState("")
    const [desc, setDesc] = useState("")

    function handlecity(event) {
        setCity(event.target.value)
    }
    function getWeather() {
        var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0e7bd58f984928caa73f7216a5486836`)
        weatherData.then(function (success) {
            console.log(success.data)
            setWeather(success.data.weather[0].main)
            setTemp(success.data.main.temp)
            setDesc(success.data.weather[0].description)
        })
    }

    return (
        <div>

            <div className="flex justify-center mt-10 flex-wrap motion-preset-bounce motion-preset-slide-right motion-duration-2000 ">

                <input type="text" 
                onChange={handlecity} placeholder=" Enter Your City Name" 
                className="border border-black w-96 h-10 bg-transparent " />

                <button onClick={getWeather}
                    className="bg-orange-500 text-white font-medium p-2 
                     hover:motion-preset-confetti motion-duration-2000">
                    Get Report
                </button>
            </div>
            
            <div className="flex justify-between text-white gap-5 flex-wrap font-medium my-16 ">

                <div style={{ backgroundColor: "#166FE5" }}
                    className="px-10 py-5 border rounded-md text-center flex-grow 
                    motion-preset-slide-right motion-duration-2000 ">
                    <h1 className="text-2xl">Weather :</h1>
                    <p className="text-xl font-medium mt-2 text-white">🌤️{weather}</p>
                </div>

                <div style={{ backgroundColor: "#166FE5" }}
                    className="px-10 py-5 border rounded-md text-center flex-grow ">
                    <h1 className="text-2xl">Temperature :</h1>
                    <p className="text-xl font-medium mt-2 text-white">🌡️ {tepm}</p>
                </div>

                <div style={{ backgroundColor: "#166FE5" }}
                    className="px-10 py-5 border rounded-md text-center flex-grow motion-preset-slide-left motion-duration-2000">
                    <h1 className="text-2xl">Description :</h1>
                    <p className="text-xl font-medium mt-2 text-white">🧾 {desc}</p>
                </div>

            </div>

        </div>

    )
}
export default Weather