import { useState } from "react";

export default function Weather() {
  const [zip, setZip] = useState("94210");
  const [unit, setUnit] = useState("metric");

  return (
    <div className="flex flex-col">
      <h1>
        {zip} {unit}
      </h1>
      <form className="">
        <div>
          <input
            className="p-3 border border-stone-500 rounded-l-lg"
            placeholder="enter zip code"
            value={zip}
            onChange={(e) => {
              setZip(e.target.value);
            }}
            type="number"
          />

          <button className="bg-stone-800 text-stone-100 px-5 py-3 rounded-r-lg h-full border border-stone-500 hover:bg-stone-600">
            submit
          </button>
        </div>

        <select
          className="p-2 border-2 border-stone-500 rounded"
          onChange={(e) => setUnit(e.target.value)}
          value={unit}
        >
          <option value="metric">Celsius</option>
          <option value="standard">Kelvin</option>
          <option value="imperial">Fahrenheit</option>
        </select>

        <div className="flex flex-col">
          <label>
            <input
              type="radio"
              name="unit"
              checked={unit === "metric"}
              onChange={() => setUnit("metric")}
            />
            metric
          </label>
          <label>
            <input
              type="radio"
              name="unit"
              checked={unit === "imperial"}
              onChange={() => setUnit("imperial")}
            />
            imperial
          </label>
          <label>
            <input
              type="radio"
              name="unit"
              checked={unit === "standard"}
              onChange={() => setUnit("standard")}
            />
            standard
          </label>
        </div>
      </form>
    </div>
  );
}
