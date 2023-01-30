export default function WeatherDisplay(props) {
  const { temp, feelsLike, description, city, unit, cod, message } = props;
  const unitString = getUnits(unit);
  function getUnits(unit) {
    if (unit === "metric") {
      return "°C";
    } else if (unit === "imperial") {
      return "°F";
    } else if (unit === "standard") {
      return "°K";
    }
  }

  if (cod !== 200) {
    return <p>{message}</p>;
  }
  return (
    <div className="flex flex-col p-4 border border-black rounded m-5 items-center">
      <h3 className="mb-2">current weather in {city}</h3>
      <h1 className="text-4xl mb-3">
        {temp} {unitString}
      </h1>
      <h2>
        feels like {feelsLike} {unitString}
      </h2>
      <p>{description}</p>
    </div>
  );
}
