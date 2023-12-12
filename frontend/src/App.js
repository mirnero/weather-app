import React, { useState } from 'react';
import axios from 'axios';
import WeatherForm from './components/WeatherForm';
import WeatherInfo from './components/WeatherInfo';
import ErrorMessage from './components/ErrorMessage';
import './App.css';

function App() {
    const [coordinates, setCoordinates] = useState({ lat: '', lon: '' });
    const [lastRequestedCoordinates, setLastRequestedCoordinates] = useState(null);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);


    const handleInputChange = (e) => {
        setCoordinates({ ...coordinates, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            const response = await axios.get(`http://localhost:3000/weather?lat=${coordinates.lat}&lon=${coordinates.lon}`);
            setData(response.data);
            setLastRequestedCoordinates({ ...coordinates });
        } catch (error) {
            console.error('Error fetching weather:', error);
            //setData(null);
            setError("Unable to fetch weather data. Please make sure the backend is running.");
        }
    };


  const getLocalTime = (timezoneOffset) => {
    const nowUtc = new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60000);
    const localTime = new Date(nowUtc.getTime() + timezoneOffset * 1000);
    return localTime.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit', hour12: false });
};

const getLocationDisplay = () => {
    return data.name ? `${data.name}, ${data.sys.country}` : `Lat: ${lastRequestedCoordinates.lat}, Lon: ${lastRequestedCoordinates.lon}`;
}
    return (
        <div>
            <h1 className="title">Weather App</h1>
            <WeatherForm 
                coordinates={coordinates}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
            />
            {error && <ErrorMessage message={error} />}
            {data && <WeatherInfo 
            data = {data}
                locationDisplay={getLocationDisplay} 
                        />}
        </div>
    );
}

export default App;
