import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Login from './pages/Login';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path='/' element={<Welcome/>}/>
                    <Route path='/Login' element={<Login/>}/>
                </Routes>
            </Router>

        </div>
    );
}

export default App;
