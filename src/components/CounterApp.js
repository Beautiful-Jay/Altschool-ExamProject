import React from 'react'
  
function CounterApp() {
    const people = customCounter(0)
    return (
        <div>
            <h1>People entered:</h1>
            <span>{people.value}</span>
            <button onClick={'increment'}>Increment</button>
            <button onClick={'decrement'}>Decrement</button>
            <button onClick={'reset'}>Reset</button>
            </div>

    )
}

  const customCounter = (initialValue) => {
    const [value, setValue] = useState(initialValue);
  
    const increment = () => setValue(c => c + 1);
    const decrement = () => setValue(c => c - 1);
    const reset = () => setValue(initialValue);
  
    return { value, increment, decrement, reset };
  };

  export default CounterApp;