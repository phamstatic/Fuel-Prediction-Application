import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path='/' element={<Welcome/>}/>
                    <Route path='/Login' element={<Login/>}/>
                    <Route path='/Register' element={<Register/>}/>
                </Routes>
            </Router>

        </div>
    );
}

export default App;
