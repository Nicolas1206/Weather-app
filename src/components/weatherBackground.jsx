import { useEffect, useState } from "react";
import axios from "axios";

const WeatherBackground = ({ countryName }) => {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await axios.get(
          `https://restcountries.com/v2/name/${countryName}`
        );
        const country = response.data[0];

        const flags = country.flags;
        const randomIndex = Math.floor(Math.random() * flags.length);
        const randomFlag = flags[randomIndex];

        setBackgroundImage(randomFlag);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchCountryData();
  }, [countryName]);

  return (
    <div
      className="weather-background"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    ></div>
  );
};

export default WeatherBackground;
