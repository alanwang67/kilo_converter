import React from 'react'
import { useState } from 'react'
import { red, blue, black, yellow, green, white, silver } from '../assets/images' 
import Box from '@mui/material/Button'
import { bgcolor } from '@mui/system'


const Result = ( {value} ) => {
  let result = ""
  for (let i = 0; i < value.length; i++) {
    result += value[i] + " "
  }

  const weight_color_pairs = {
    "25": red,
    "20": blue,
    "15": yellow,
    "10": green,
    "5": white,
    "2.5": black,
    "1.25": silver
  }

  return (
    <div className = 'weights'>
      {value.map((item, id) => 
      <img key = {id} src = {weight_color_pairs[item]} alt = {weight_color_pairs[item]} />)}
    </div>
  )

}

export default Result