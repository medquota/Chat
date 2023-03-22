import React from 'react';
import type { ReactElement } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Messages from "../Messages/Messages";
import Home from '../Home/Home';

const RouteApp= ():ReactElement => {
    return (
      <div>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/messages/:id" element={<Messages/>} />
      </Routes>
    </Router>
    </div>
    );
}
export default RouteApp;