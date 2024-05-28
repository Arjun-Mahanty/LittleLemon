
import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";


import Dishes from "./Dishes";

const Home = () => {
    
  return (
    <>
    <div>
      <h1>Home Page</h1>
      Would you like to look at our Dishes?
      <button ><Link to='/dishes'>Dishes</Link></button>
    </div>    
  </>
  );
};

export default Home;
