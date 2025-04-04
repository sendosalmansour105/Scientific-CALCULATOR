import React from "react"
import Calculator from "./Component/Calculator"

function App() {


  return (
    <div className="App">
      <h1 style={{textTransform:"uppercase"}}>Scientific Calculator</h1>
      <Calculator />
      <p className="developer">Developed by <span>Sendos</span></p>
    </div>
  )
}

export default App
