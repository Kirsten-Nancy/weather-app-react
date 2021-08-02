const Today = ({ data, location }) => {
  function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
  }
  const date = new Date();

  return (
    <div className="home">
      <p className="location">{location}</p>
      <p className="time">
        {date.toDateString()},{" "}
        {capitalize(data.daily[0].weather[0].description)}
      </p>
      <div className="main">
        <p className="temp">{Math.round(data.daily[0].temp.day)} °C</p>
        <img
          src={`http://openweathermap.org/img/w/${data.daily[0].weather[0].icon}.png`}
          alt="weather-icon"
          className="icon"
        />
        <div>
          <p className="max">{Math.round(data.daily[0].temp.max)}°</p>
          <p className="min">{Math.round(data.daily[0].temp.min)}°</p>
        </div>
      </div>

      <p>Feels like: {Math.round(data.daily[0].feels_like.day)}°C</p>
    </div>
  );
};

export default Today;
