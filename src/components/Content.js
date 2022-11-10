import React, { useState } from "react";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet'

const Counter = ({ count, setCount }) => {
  if (count === 4) {
    throw new Error('Ops! Number limit is 4');
  }
 
  return (
    <div className="home">
      <div className="btn-reducer">
      <div>
      <h1>Try to count 1 to 5 </h1>
        {count}</div>
      <button id='increment' onClick={() => setCount(count + 1)}>Increment</button>
      <button id='decrement' onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </div>
  );
};

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};


 const Content = () => {
  const [count, setCount] = useState(0)
  return (
        <div>
        <Helmet>
        <title>Error Boundary</title>
        <meta name="description" content="A page showing error boundary" />
        <meta name="keywords" content="errorboundary" />
      </Helmet>
         <div className='section'>
          <NavLink className="navlink"
          to="/">Home
          </NavLink>
        </div>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => setCount(0)}
      >
        <Counter count={count} setCount={setCount} />
      </ErrorBoundary>
    </div>
  )
}

export default Content;