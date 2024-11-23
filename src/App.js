import React from "react";
import { useState } from "react";
import "./App.css";

export default function App() {

  //making states for application
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [messages, setMessages] = useState("");
  const [bmi, setBmi] = useState('');

  //logic here
  let calBmi = (e) => {

    e.preventDefault();
    if(weight === 0 || height === 0){
      alert('Please Valid weight and Height');
    }

    else{
      let bmi = (weight / (height * height) * 703);

      setBmi(bmi.toFixed(1));
    

      if(bmi < 25){
        setMessages("You are under Weight");
      }
      else if(bmi >= 25 && bmi < 30){
        setMessages("You are healthy pearson");
      }  

      else{
        setMessages('You are Overweight');
      }
  }

  }


  function reload() {
    window.location.reload();
  }

  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit= {calBmi} >
          <div>
            <label>Weight (lbs)</label>
            <input
              type="text"
              placeholder="enter weigth value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div>
            <label>Height (cm)</label>
            <input
              type="text"
              placeholder="Enter Height Value"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn" onClick={reload} type="submit">
              Reload
            </button>
          </div>

          <div className="center">
            <h3>Your bmi is {bmi}</h3>
            <p>{messages}</p>
          </div>
        </form>
      </div>
    </div>
  );
}
