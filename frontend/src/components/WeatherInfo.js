import React from 'react';

function WeatherInfo({ data, locationDisplay }) {
    const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    
    

    function getTemperatureColor(temp) {
        const minTemp = -5; 
        const maxTemp = 40;  
    
        const normalized = (temp - minTemp) / (maxTemp - minTemp);
        const hue = 240 - normalized * 240; 
    
        return `hsl(${hue}, 100%, 50%)`; 
    }

    const getLocalTime = (timezoneOffset) => {
        const nowUtc = new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60000);
        const localTime = new Date(nowUtc.getTime() + timezoneOffset * 1000);
        return localTime.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit', hour12: false });
    };

    return (
        <div className="weather-container" style={{borderColor: getTemperatureColor(data.main.temp)}}>
            <h2>{locationDisplay()} ({getLocalTime(data.timezone)})</h2>
            <div className="weather-details">
                <img src={iconUrl} alt="Weather icon" className="weather-icon" />
                <p><strong> {data.weather[0].description}</strong></p>
                <span className="temperature" style={{ color: getTemperatureColor(data.main.temp) }}>
                    {data.main.temp}°C
                </span>

            </div>
            <div className="weather-info-row">
                <p className="weather-info"><strong>Humidity:</strong> {data.main.humidity}%</p>
                <p className="weather-info"><strong>Wind:</strong> {data.wind.speed} m/s</p>
            </div>
        </div>
    );
}

export default WeatherInfo;