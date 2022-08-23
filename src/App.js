import React from 'react'
import { useState } from 'react'
import Result from './components/Result'

// what we want to do is after every submit
// show what weight we want the default state 
// will be empty to begin with 

const App = ( ) => {

  const [weight, changeWeights] = useState('')
  const [displayWeight, changeDisplayWeight] = useState([])

  const converter = () => {
    let weights = [25,20,15,10,5,2.5,1.25]
    let x = Number(weight) / 2.20462
    
    if (weight === '') {
      return []
    }

    let ctr = 0
    let track = 20
    let result = []
    while (ctr <= (weights.length - 1)) {
      if (x > track) {
        track += weights[ctr] * 2
        result.push(weights[ctr])
      }
      else {
          track -= weights[ctr] * 2
          result.pop()
          ctr += 1
      }
    }

    return result
  }

  const updateWeight = (event) => {
    event.preventDefault()
    changeDisplayWeight(converter(weight))
    changeWeights('')
  }

  const handleWeightChange = (event) => {
    changeWeights(event.target.value)
  }

  return (
    <div className = 'container'>
      <h1 className ='title'> KiLO </h1>
      <form onSubmit = {updateWeight}>
        <input value = {weight} onChange = {handleWeightChange} />
        <button type = "submit"> Submit </button>
      </form>
      <Result value = {displayWeight} /> 
    </div>
  )
}

export default App;
