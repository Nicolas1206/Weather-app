import { useEffect, useState } from "react";
import axios from "axios";

const ACCESS_KEY = "2HvVG1KvjtbicGLI-C54_BAMfb7_0h9SMIC-joci2N4";

export default function WeatherBackground {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [countryName, setCountryName] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos/random?query=${countryName}&client_id=${ACCESS_KEY}`
      );
      const imageUrl = response.data.urls.regular;
      setBackgroundImage(imageUrl);
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
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
      </div>
    </div>
  );
};

