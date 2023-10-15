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
    return (
        <div className="App">
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
