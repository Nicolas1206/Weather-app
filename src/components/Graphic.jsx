import axios from "axios";

export default function getGraphic() {
  const graph = () => {
    axios
      .get
      // "http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}"
      ()
      .then((response) => {});
  };
}
