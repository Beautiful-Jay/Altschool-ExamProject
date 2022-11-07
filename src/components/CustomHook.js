import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { Helmet } from 'react-helmet'
  
   const useCounter = () => {
    const [value, setValue] = useState(0);
   const increment = () => {
   setValue(prevValue => prevValue + 1)
   }
  const decrement = () => { 
    setValue(prevValue => prevValue  - 1) 
  }
   const reset = () => {
     setValue(0) 
     }
  
   return  [value, increment, decrement, reset]; 
   }

  function Counter() {
    const [value, increment, decrement, reset] = useCounter()
    return (
        <div className='home1'>
          <div className='btn-reducer'>
          <span>Let's Count</span>
           <h1> Number: {value} </h1>
            <button id='increment' onClick={increment}>Increase</button>
            <button id='decrement' onClick={decrement}>Decrease</button>
            <button id='reset' onClick={reset}>Reset</button>
            </div>
            </div>
    );
}

function CounterApp() {
return (
  <div className='main'>
     <Helmet>
        <title>Counter B</title>
        <meta name="description" content="Helps to count numbers" />
        <meta name="keywords" content="counter" />
      </Helmet>
     <div className='section'>
    <NavLink className="navlink"
      to="/">Home
      </NavLink>
    </div>
  <div>
<Counter initialCount={0} />
  </div>
  </div>
)
}
  export default CounterApp;

  // const useCounter = initialCount => {
  //   const [value, setValue] = useState(initialCount);
  //   return {
  //     count: value,
  //     increment: () => setValue(prevValue => prevValue + 1),
  //     decrement: () => setValue(prevValue => prevValue  - 1),
  //     reset: () => setValue(initialCount),
  //      };
  // };
