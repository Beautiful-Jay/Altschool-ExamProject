import React from 'react';
import { NavLink } from 'react-router-dom'
import { Helmet } from 'react-helmet'

function Layout() {
  return (
    <div>
      <div className="section2">
      <NavLink style={({ isActive }) =>
          isActive ? { color: "white" } : { color: "black" }
        } className="navlink"
      to="/">Home
      </NavLink>
      <NavLink style={({ isActive }) =>
          isActive ? { color: "white" } : { color: "black" }
        } className="navlink" 
      to="/content">Content
      </NavLink>
      <NavLink style={({ isActive }) =>
          isActive ? { color: "white" } : { color: "black" }
        } className="navlink"
         to="/reducer">Counter A
      </NavLink>
      <NavLink style={({ isActive }) =>
          isActive ? { color: "white" } : { color: "black" }
        } className="navlink" 
      to="/custom">Counter B
      </NavLink>
      </div>
      <h1 className='layout-header'>Welcome to the <span className="span-header">World </span>of <span className="span-header">Numbers!</span></h1>
    </div>
  );
}

const Home = () => {
  return (
    <div className='home'>
      <Helmet>
        <title>Counter App</title>
        <meta name="description" content="Helps to count numbers" />
        <meta name="keywords" content="counter" />
      </Helmet>
       <header >
       <Layout />
       <div className="section1">
        <p>I'm guessing you like to count. Click on a counter to start</p>
      <p >Sunt in culpa qui officia deserunt mollit anim id est laborum
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco.</p>
            </div>
            </header>
   </div>
  )
}

export default Home;
