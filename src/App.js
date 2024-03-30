import React from 'react';
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Privacy from "./Components/Privacy";
import Signup from "./Components/Signup";
import Loginform from "./Components/Loginform";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar";
const App = () => {
  return (
    <div>
        <Router>
            <Navbar />
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/contact'} element={<Contact />} />
                <Route path={'/privacy'} element={<Privacy />} />
                <Route path={'/signup'} element={<Signup />} />
                <Route path={'/loginform'} element={<Loginform />} />
            </Routes>
        </Router>
    </div>
  );
};

export default App;
