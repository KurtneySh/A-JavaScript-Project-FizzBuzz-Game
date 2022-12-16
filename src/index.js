import React, { useState } from 'react'
import { createRoot } from "react-dom/client"
import "./style.css"

const App = () => {
    const [inputNumber, setInputNumber] = useState('');
    const [output, setOutput] = useState('');
  
    const handleInputChange = (event) => {
      setInputNumber(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      let message = '';
      if (inputNumber % 3 === 0 && inputNumber % 5 === 0) {
        message = 'FizzBuzz';
      } else if (inputNumber % 3 === 0) {
        message = 'Fizz';
      } else if (inputNumber % 5 === 0) {
        message = 'Buzz';
      } else {
        message = `${inputNumber} can not be divided by 3 or 5.`;
      }
      setOutput(message);
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>Enter a number:</label>
          <input
            type="number"
            name="inputNumber"
            value={inputNumber}
            onChange={handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <div>{output}</div>
      </div>
    );

}
const app = document.querySelector("#app")
const root = createRoot(app)
root.render(<App />)