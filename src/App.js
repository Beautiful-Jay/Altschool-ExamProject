import { Routes, Route } from "react-router-dom";
import NoPage from './components/NoPage';
import Content from './components/Content';
import Home from './components/Home';
import background from "./background.jpg";
import { Link } from 'react-router-dom';
import { useReducer } from "react";
import { ErrorBoundary } from './components/ErrorBoundary';
import './App.css';

function Layout() {
  return (
    <div>
      <h1>Welcome to the app!</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/content">Content</Link>
      </nav>
    </div>
  );
}

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

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App" style={{ backgroundImage: `url(${background})`,backgroundRepeat:"no-repeat",backgroundSize:"cover", height:"100vh" }}>
      <header className="App-header">
       <Layout />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content" element={ <ErrorBoundary><Content /></ErrorBoundary>} />
        <Route path="*" element={<NoPage />} />
      </Routes>
  

    <div className='home'>
<h1>People entered:</h1>
   <div>
   <div>
      Count: {state.setValue}
        <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            </div>
   </div>
   </div>
   </div>
  );
}

export default App;
