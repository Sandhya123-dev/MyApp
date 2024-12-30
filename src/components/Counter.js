import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount]= useState(0);

  return (
    <div className='counter'>
        <h1>Count : {count}</h1>
        <div>
        <button onClick={() =>{
                    setCount(count + 1);
        }
        }>Increment</button>
        </div>
        </div>
  )
}

export default Counter