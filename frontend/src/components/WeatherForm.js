import React from 'react';

function WeatherForm({ coordinates, handleInputChange, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit} className="form-container">
            <input
                type="text"
                name="lat"
                placeholder="Latitude"
                value={coordinates.lat}
                onChange={handleInputChange}
                className="input-field"
            />
            <input
                type="text"
                name="lon"
                placeholder="Longitude"
                value={coordinates.lon}
                onChange={handleInputChange}
                className="input-field"
            />
            <button type="submit" className="input-field">Get</button>
        </form>
    );
}

export default WeatherForm;