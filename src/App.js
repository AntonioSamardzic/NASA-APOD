import React, { useState, useEffect } from "react"
import axios from "axios"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

function App() {
  const [image, setImage] = useState("")
  const [date, setDate] = useState(new Date())

  const handleCalendarClose = () => console.log("Calendar closed")
  const handleCalendarOpen = () => console.log("Calendar opened")

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=ogdSo3reoQL3v1GcXYatFWbmFOxqJgFJFnfbu4g3`
      )
      .then((res) => {
        setImage(res.data.url)
      })
  }, [])

  return (
    <div className="App">
      <div>
        <img className="image" src={image} alt="apod" />
      </div>
      <div>
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          onCalendarClose={handleCalendarClose}
          onCalendarOpen={handleCalendarOpen}
        />
      </div>
    </div>
  )
}

export default App
