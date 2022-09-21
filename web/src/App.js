import './App.css';
import Home from './components/home';
// import About from './components/about';
// import Gallery from './components/gallery';
import React from "react";
import Login from './components/login';
import Signup from './components/signup';
import Gallery from './components/gallery';
import NavBar from './components/navbar'

import {
  BrowserRouter as Router,
  Routes ,
  Route,
  // Link,/////it is 'a' anchor tag
 
} from "react-router-dom";





function App() {
  return (
    <Router>

      <NavBar/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>

          {/* <Route path="/about" element={ <About /> } /> */}
          <Route path="/gallery" element={ <Gallery /> } />
          <Route path="/" element={ <Home /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/signup" element={ <Signup /> } />
        </Routes>
      
    </Router>
  );
}

export default App;
