// import { useState } from "react";
// import axios from "axios";

// const ACCESS_KEY = "2HvVG1KvjtbicGLI-C54_BAMfb7_0h9SMIC-joci2N4";

// export default function WeatherBackground() {
//   const [backgroundImage, setBackgroundImage] = useState("");
//   const [countryName, setCountryName] = useState("");

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(
//         `https://api.unsplash.com/photos/random?query=${countryName}&client_id=${ACCESS_KEY}`
//       );
//       const imageUrl = response.data.urls.regular;
//       setBackgroundImage(imageUrl);
//     } catch (error) {
//       console.error("Error fetching background image:", error);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={countryName}
//         onChange={(e) => setCountryName(e.target.value)}
//         placeholder="Enter country name"
//       />
//       <button onClick={handleSearch}>Search</button>
//       <div
//         className="weather-background"
//         style={{ backgroundImage: `url(${backgroundImage})` }}
//       ></div>
//     </div>
//   );
// }

import { useState } from "react";
import axios from "axios";

const ACCESS_KEY = "2HvVG1KvjtbicGLI-C54_BAMfb7_0h9SMIC-joci2N4";

export default function WeatherBackground() {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [countryName, setCountryName] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${countryName}&client_id=${ACCESS_KEY}`
      );
      console.log("Response:", response.data);
      const imageUrl = response.data.results[0].urls.full;
      setBackgroundImage(imageUrl);
      console.log("Background image updated:", imageUrl);
    } catch (error) {
      console.error("Error fetching background image:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={countryName}
        onChange={(e) => setCountryName(e.target.value)}
        placeholder="Enter country name"
      />
      <button onClick={handleSearch}>Search</button>
      <div
        className="weather-background"
        style={{
          backgroundImage: `url(${backgroundImage || backgroundImage})`,
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
}

// import { useState } from "react";
// import axios from "axios";

// const WeatherBackground = () => {
//   const [location, setLocation] = useState("");
//   const [weatherData, setWeatherData] = useState(null);
//   const [backgroundImage, setBackgroundImage] = useState("");
//   const ACCESS_KEY = "2HvVG1KvjtbicGLI-C54_BAMfb7_0h9SMIC-joci2N4";

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(`API_URL/?location=${location}`);
//       const data = response.data;
//       setWeatherData(data);

//       // Fetch a random image from Unsplash based on the location
//       const imageUrl = await fetchRandomImage(location);
//       setBackgroundImage(imageUrl);
//     } catch (error) {
//       console.error(error);
//       // Handle error cases
//     }
//   };

//   const fetchRandomImage = async (location) => {
//     try {
//       const response = await axios.get(
//         `https://api.unsplash.com/search/photos?query=${location}&client_id=${ACCESS_KEY}`
//       );
//       const imageUrl = response.data.urls.regular;
//       return imageUrl;
//     } catch (error) {
//       console.error(error);
//       // Handle error cases
//     }
//   };

//   return (
//     <div style={{ backgroundImage: `url(${backgroundImage})` }}>
//       <h1>Weather Application</h1>
//       <input
//         type="text"
//         onChange={(e) => setLocation(e.target.value)}
//         placeholder="Enter the location"
//       />
//       <button onClick={handleSearch}>Search</button>
//       {/* Render other weather data using the weatherData state */}
//     </div>
//   );
// };

// export default WeatherBackground;
