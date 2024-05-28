// Filename - App.js

import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import Home from "./component/home";
import About from "./component/about";
import Dishes from "./component/Dishes";
import Feedback from "./component/feedback";
import "./App.css";
import logo from './logo.png'

const App = ()=>{
    
        return (
            <Router>
                <div className="App">
                    <ul className="App-header">
                        
                        <table>
                            <tr className="linkrow">
                                <td className="link" id="logo">
                                    <img src={logo} alt="Logo" className="logo-img" />
                                </td>

                                <td className="link">
                                    <li>
                                    <Link to="/">HOME</Link>
                                    </li>
                                </td>
                                <td className="link">
                                    <li>
                                    <Link to="/about">ABOUT US</Link>
                                    </li>
                                </td>
                                <td className="link">
                                    <li>
                                    <Link to="/dishes">DISHES</Link>
                                    </li>
                                </td>
                                <td className="link">
                                    <li>
                                    <Link to="/feedback">FEEDBACK</Link>
                                    </li>
                                </td>
                            </tr>
                    </table>
                    <table className="restroname">
                            <tr>
                                <td>
                                    <h1>LITTLE LEMON</h1>
                                </td>
                            </tr>
                        </table>
                    </ul>
                    <Routes>
                        <Route
                            path="/"
                            element={<Home />}
                        ></Route>
                        <Route
                            path="/about"
                            element={<About />}
                        ></Route>
                        <Route
                            path="/dishes"
                            element={<Dishes />}
                        ></Route>
                        <Route
                            path="/feedback"
                            element={<Feedback />}
                        ></Route>
                    </Routes>
                </div>
            </Router>
        );
    
}

export default App;