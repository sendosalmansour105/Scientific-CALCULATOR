import React from 'react'

const KeysWindow = ({handleButton}) => {
  const sciKeys = ["sin", "cos", "ln", "log", "tan", "π", "e", "^", "!", "√"]
  const basicKeys = [
    "7",
    "8",
    "9",
    "*",
    "/",
    "4",
    "5",
    "6",
    "-",
    "(",
    "1",
    "2",
    "3",
    "+",
    ")",
    ".",
    "0",
    "DEL",
    "AC",
    "=",
  ]
  return (
    <div className='KeysWindow'>
      <div className="keys-scientific">
        {sciKeys.map((item, index) => (
          <button key={index}
          onClick={() => handleButton(item)}
          >{item}</button>
        ))}
      </div>
      <div className="line"></div>
      <div className="keys-basic">
        {basicKeys.map((item, index) => (
          <button key={index}
          onClick={() => handleButton(item)}
            className={ `${item >= "0" && item <= "9" ? "number" : ""}${item === "=" && "equal"}`}>
            {item}</button>
        ))}
      </div>
    </div>
  )
}

export default KeysWindow