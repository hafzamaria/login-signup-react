import './App.css';
import Home from './components/home';
// import About from './components/about';
// import Gallery from './components/gallery';
import React from "react";
import Login from './components/login';
import Signup from './components/signup';

import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link,/////it is 'a' anchor tag
 
} from "react-router-dom";





function App() {
  return (
    <Router>

      <div className='nav1'>
        <nav className='nav'>
        {/* <h1>Welcome</h1> */}
          <ul>

            <li>
              <Link to="/">Home</Link>
            </li>

            {/* <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/gallery">Gallery</Link>
            </li> */}
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>

          </ul>
        </nav>
</div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>

          {/* <Route path="/about" element={ <About /> } /> */}
          {/* <Route path="/gallery" element={ <Gallery /> } /> */}
          <Route path="/" element={ <Home /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/signup" element={ <Signup /> } />
        </Routes>
      
    </Router>
  );
}

export default App;
