import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

    const [data, setData] = useState(null);

    useEffect(() => {
        // Function to make API call
        const fetchData = async () => {
            try {
                // Replace 'your-api-endpoint' with the actual endpoint of your ASP.NET Core Web API
                const response = await axios.get('https://localhost:7065/WeatherForecast');

                // Handle the data received from the API
                setData(response.data);
            } catch (error: any) {
                // Handle errors
                console.error('Error fetching data:', error.message);
            }
        };

        // Call the API function
        fetchData();
    }, []); // Empty dependency array ensures that the API call runs once when the component mounts


    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p> 

                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                {
                    
                }
                {

                }



            </header>
        </div>
    );
}

export default App;
