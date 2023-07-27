import React, { useState, useContext, useEffect } from "react";
import { StyledWeatherReportWrapper } from "./WeatherReport.styled";
import { CounterContext } from "../../App";
const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?q=noida,india&appid=4d5f464c519ac64469322ac973920c8e'

const WeatherReport = () => {
    const { themeValue } = useContext(CounterContext);
    const [weather, setWeather] = useState("");
    const [temperature, settemperature] = useState(0);
    useEffect(() => {
        const callWeather = async () => {
            const weatherData = await fetch(WEATHER_URL)
            .then(res=> res.json())
            const data = {...weatherData};
            const {main, weather} = data;
            const {temp} = main;
            const convertedTemp =  (parseInt(temp)-32)/1.8
            settemperature(convertedTemp);
            const {description} = weather[0];
            setWeather(description.toUpperCase());
        }
        callWeather()
        return () => {
            console.log("Cleaned");
        }
    },[])
    return <StyledWeatherReportWrapper theme={themeValue}>
        <h3>Weather Today</h3>
        <p className="weather-today">Todays Weather:  {weather}</p>
        <p>Current Temperature: {temperature} *C</p>
    </StyledWeatherReportWrapper>
}

export default WeatherReport;