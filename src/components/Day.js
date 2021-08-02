const Day = ({ day }) => {
  let date = new Date(day.dt * 1000);
  var options = { weekday: "long", month: "long", day: "numeric" };

  let formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);

  let today = new Date();

  function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
  }
  return (
    <div>
      <div className="day">
        <div className="col1">
          <p>
            {date.getDate() === today.getDate()
              ? "Today"
              : capitalize(formattedDate)}
          </p>
          <p style={{ color: "gray" }}>
            {capitalize(day.weather[0].description)}
          </p>
        </div>

        <img
          src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
          alt="weather-icon"
          className="icon"
        />
        <div>
          <p className="max">{Math.round(day.temp.max)}°</p>
          <p className="min">{Math.round(day.temp.min)}°</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Day;
