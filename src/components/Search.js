import { useState } from "react"

const Search = ({ city, setCity }) => {
  const [input, setInput] = useState("")

  const handleSubmit = () => {
    // console.log(input);
    setCity(input)
  }

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Enter a city"
        value={city}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Search</button>
      {/* <button onClick={() => handleSubmit()}>Search</button> */}
    </div>
  )
}

export default Search
