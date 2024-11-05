import React from 'react'
import HOC from '../HOC'

const Hover = ({counter,incCounter}) => {
  return (
    <div>
        <h1 onMouseOver={incCounter}>Counter hover {counter} times</h1>
        </div>
  )
}

export default HOC(Hover)