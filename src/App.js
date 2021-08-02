import { useState, useEffect } from "react"
import Search from "./components/Search"
import "react-tabs/style/react-tabs.css"
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import Week from "./components/Week"
import Today from "./components/Today"

const APIKEY = process.env.REACT_APP_WEATHER_API_KEY

// Debounce
function App() {
  const [data, setData] = useState(null)
  const [city, setCity] = useState("Harbin")
  const [location, setLocation] = useState("Harbin, CN")

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line
  }, [city])

  const fetchData = async () => {
    //Use city to get long and lat
    const cityResponse = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${APIKEY}`
    )
    const result = await cityResponse.json()
    console.log(result)

    setLocation(result[0].name + "," + result[0].country)
    let long = result[0].lon
    let lat = result[0].lat
    console.log(lat, long)

    //Use long and lat to fetch data of that location
    //
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=current,minutely,alerts,hourly&appid=${APIKEY}&units=metric`
    )
    const weatherData = await response.json()
    console.log(weatherData)
    setData(weatherData)
  }

  return (
    <div className="app">
      <p>Enter city name</p>
      <Search setCity={setCity} />
      <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Today">
          {data ? <Today data={data} location={location} /> : ""}
        </Tab>
        <Tab eventKey="week" title="Week">
          {data ? <Week data={data.daily} /> : ""}
        </Tab>
      </Tabs>
    </div>
  )
}

export default App
