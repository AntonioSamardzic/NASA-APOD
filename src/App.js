import React, { useState, useEffect } from "react"
import axios from "axios"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [image, setImage] = useState("")
  const [input, setInput] = useState({ date: "" })

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=ogdSo3reoQL3v1GcXYatFWbmFOxqJgFJFnfbu4g3`
      )
      .then((res) => {
        setImage(res.data)
      })
  }, [])

  let today = new Date()
  let D = String(today.getDate()).padStart(2, "0")
  let M = String(today.getMonth() + 1).padStart(2, "0")
  let Y = today.getFullYear()
  today = Y + "/" + M + "/" + D

  const handleShowButton = (e) => {
    e.preventDefault()
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=ogdSo3reoQL3v1GcXYatFWbmFOxqJgFJFnfbu4g3&date=${input.date}`
      )
      .then((res) => {
        console.log(res.data)
        setImage(res.data)
        document.getElementsByClassName("image").src = input.image
      })
  }

  return (
    <div className="container ">
      <div>
        <h1 className="mb-2 text-white text-3xl text-center">
          Todays date: {today}
        </h1>
        <img className="images rounded" src={image.url} alt="APODImage" />
      </div>

      <div className="">
        <input
          className="rounded p-2 color-black font-bold text-center"
          type="date"
          id="date"
          name="trip-start"
          value={input.date}
          onChange={(e) => setInput({ ...input, date: e.target.value })}
        ></input>
        <button
          className="ml-2 mt-2 bg-white rounded p-2 color-black font-bold text-center"
          onClick={handleShowButton}
        >
          Show Picture
        </button>
      </div>
    </div>
  )
}

export default App
