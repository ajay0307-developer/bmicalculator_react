//import logo from './logo.svg';
import React, {useState} from 'react'
import './index.css';

function App() {
  const [weight, setWeight] = useState()
  const [height, setHeight] = useState()
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('There is no message')

  let imgsrc=''
  let calcBmi = (event) => {
  
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    } else {
      let bmi = (weight / (height * height) * 703)

      setBmi(bmi.toFixed(1))


      if (bmi < 25) {
        setMessage('You are underweight')
      } else if (bmi >= 25 && bmi < 30) {
        setMessage('You are a healthy weight')
      } else {
        setMessage('You are overweight')
      }
    }
  }
  
  
  let reload = () => {
    window.location.reload()
  }


  return (
    <div className="app">
      <div className='container'>
        <h2 className='center'>BMI Calculator</h2>
        <br></br>
      <form onSubmit = {calcBmi}>
        <div>
          <label>Weight(kg)</label>
          <br></br>
          <input value={weight}  onChange = {(event) => setWeight(event.target.value)}/>
        </div>
        <br></br>
        <div>
          <label>Height(cm)</label>
          <br></br>
          <input value={height}  onChange = {(event) => setHeight(event.target.value)}/>
        </div>
        <br></br>
        <div>
          <button className='btn' type='submit'>Submit</button>
          <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>

        </div>
        <br></br>
      </form>
      <div className='center'>
      <h3>Your BMI is:{bmi}</h3>
      <p>{message}</p>    
      </div>
      <div className='img-container'>
        <img src = {imgsrc} alt=''/>
      </div>
      </div>
    </div>
  );
  }
export default App;