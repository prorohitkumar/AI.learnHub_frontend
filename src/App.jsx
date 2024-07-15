import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Admin from './components/Admin';
import User from './components/User';
import Home from './components/Home';

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/user" element={<User />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
