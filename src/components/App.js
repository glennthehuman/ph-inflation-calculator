import React from "react"

import Calculator from "./Calculator"
import Notes from "./Notes"
import Header from "./Header"

import { SITE_URL } from "../constants/LinkConstants"

import ogImage from "../assets/og_image.png"

const App = () => {
  return(
    <div className="App">
      <Header />
      <Calculator />
      <Notes />
    </div>
  )
}

export default App;
