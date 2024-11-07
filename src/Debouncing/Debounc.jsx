import { debounce } from 'lodash'
import React, { useCallback, useState } from 'react'

const Debounc = () => {
    const [query, setQuery] = useState('')
    let count = 0
    const handleChange = useCallback(debounce((value) => {
        count+=count
        console.log("Searching for :",value)
        console.log(count)
        fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
    },1000),[])

   let inputChange = (e) => {
        setQuery(e.target.value)
         handleChange(e.target.value)
    }
  return (
    <div>
        <input type="text" value={query} onChange={(e) => inputChange(e)} placeholder='search' />
    </div>
  )
}

export default Debounc