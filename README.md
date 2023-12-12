
# Weather App

## Description
This is a simple web application for displaying current weather information based on latitude and longitude. It consists of a React frontend and a Node.js backend that uses the OpenWeatherMap API to fetch weather data.

## Features
- Input for latitude and longitude through a user interface.
- Display of weather information: temperature, sky conditions, humidity, and wind speed.
- Adaptation of the temperature text color based on its value, ranging from blue for low temperatures to red for high temperatures.
- Display of the current weather condition icon.

## How to Run the Application Locally

### Prerequisites
- Node.js
- npm (Node.js package manager)

### Instructions

1. Clone the repository:
   ```
   git clone git@github.com:mirnero/weather-app.git
   ```

2. Navigate to the backend directory:
   ```
   cd weather-app
   cd backend
   ```

3. Install backend dependencies:
   ```
   npm install
   ```

4. Start the backend server:
   ```
   node server.js
   ```

5. Open a new terminal window and navigate to the frontend directory:
   ```
   cd weather-app
   cd client
   ```

6. Install frontend dependencies:
   ```
   npm install
   ```

7. Start the React application:
   ```
   npm start
   ```

The application will now be accessible at `http://localhost:3001`.

## Notes
- Ensure you have a valid OpenWeatherMap API key and include it in the `.env` file of the backend.