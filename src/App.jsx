// import { useState } from 'react'
import Header from "./components/Header";
// import Searchbar from "./components/Searchbar";
import Graphic from "./components/Graphic";
import WeatherBackground from "./components/weatherBackground";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      {/* <Searchbar /> */}
      <Graphic />
      <WeatherBackground />
    </>
  );
}

export default App;
