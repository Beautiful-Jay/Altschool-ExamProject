import React, { useReducer } from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet'

const initialState = { setValue : 0 }

 function reducer(state, action) {
        switch (action.type) {
        case 'increment':
            return { setValue: state.setValue + 1 };
        case 'decrement':
            return { setValue: state.setValue - 1 };
        case 'reset':
            return { setValue: state.setValue = 0 };
        default:
            return { setValue: state.setValue };
        }
    }

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className='main'>
        <Helmet>
        <title>Counter A</title>
        <meta name="description" content="Helps to count numbers" />
        <meta name="keywords" content="counter" />
      </Helmet>
         <div className='section'>
          <NavLink className="navlink"
          to="/">Home
          </NavLink>
        </div>
    <div className='home1'> 
    <div className='btn-reducer'>
    <span>Count with me</span>
   <h1>
        Number: {state.setValue}
   </h1>
        <button id='increment' onClick={() => dispatch({ type: 'increment' })}>Increase</button>
        <button id='decrement' onClick={() => dispatch({ type: 'decrement' })}>Decrease</button>
        <button id='reset' onClick={() => dispatch({ type: 'reset' })}>Reset</button>
   </div>
   </div>
   </div>
  )
};

export default Counter;


   