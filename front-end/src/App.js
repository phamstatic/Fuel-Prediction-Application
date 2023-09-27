import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Quote from './pages/Quote';
import History from './pages/History';

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
      fetch("http://localhost:8000/message")
        .then((res) => res.json())
        .then((data) => setMessage(data.message));
    }, []);

    return (
        <div className="App">
            <div style={{color: "white", fontSize:"15px"}}>{message}</div>
            <Router>
                <Routes>
                    <Route path='/' element={<Welcome/>}/>
                    <Route path='/Login' element={<Login/>}/>
                    <Route path='/Register' element={<Register/>}/>
                    <Route path='/Profile' element={<Profile/>}/>
                    <Route path='/Profile/Quote' element={<Quote/>}/>
                    <Route path='/Profile/History' element={<History/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
