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
    <div
      className="weather-background"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "cover",
      }}
    >
      <div className="header-input">
        <div id="header">
          <h1>Weather App</h1>
        </div>
        <div className="divInput">
          <input
            type="text"
            value={countryName}
            onChange={(e) => setCountryName(e.target.value)}
            placeholder="Enter country name"
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
    </div>
  );
}
