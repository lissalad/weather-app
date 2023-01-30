import { useState } from "react";
import RadioButton from "./RadioButton";
import WeatherDisplay from "./WeatherDisplay";

export default function Weather() {
  const [zip, setZip] = useState("");
  const [unit, setUnit] = useState("metric");
  const [data, setData] = useState(null);

  async function fetchWeather() {
    const apikey = "92ec445c608d5670f1e0c6c0e86f7410";
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}&units=${unit}`;
    const res = await fetch(path);
    const json = await res.json();

    const cod = json.cod;
    const message = json.message;
    if (cod !== 200) {
      setData({ cod, message });
      return;
    }
    const temp = json.main.temp;
    const feelsLike = json.main.feels_like;
    const description = json.weather[0].description;
    const city = json.name;
    setData({ cod, message, temp, feelsLike, description, city, unit });
    console.log(json);
    // FETCH WEATHER
    await fetch();
    // SET DATA
  }

  return (
    <div className="flex flex-col">
      {data && <WeatherDisplay {...data} />}
      <form
        className=""
        onSubmit={(e) => {
          e.preventDefault();
          fetchWeather();
        }}
      >
        <div className="mb-6">
          <input
            className="p-3 border border-stone-500 rounded-l-lg"
            placeholder="enter zip code"
            value={zip}
            onChange={(e) => {
              setZip(e.target.value);
            }}
            type="number"
          />

          <button
            type="submit"
            className="bg-stone-800 text-stone-100 px-5 py-3 rounded-r-lg h-full border border-stone-500 hover:bg-stone-600"
          >
            submit
          </button>
        </div>

        <select
          className="p-2 border-2 border-stone-500 rounded mb-4"
          onChange={(e) => setUnit(e.target.value)}
          value={unit}
        >
          <option value="metric">Celsius</option>
          <option value="standard">Kelvin</option>
          <option value="imperial">Fahrenheit</option>
        </select>

        <div className="flex flex-col">
          <RadioButton
            label="metric"
            name="unit"
            checked={unit === "metric"}
            onChange={() => setUnit("metric")}
            className=""
          />
          <RadioButton
            label="imperial"
            name="unit"
            checked={unit === "imperial"}
            onChange={() => setUnit("imperial")}
          />
          <RadioButton
            label="standard"
            name="unit"
            checked={unit === "standard"}
            onChange={() => setUnit("standard")}
          />
        </div>
      </form>
    </div>
  );
}
