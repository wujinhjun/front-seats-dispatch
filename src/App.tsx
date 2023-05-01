import React, { useEffect, useState, useContext, createContext } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";

import Login from "./components/Login";
import Seats from "./components/Seats";
import Home from "./components/Home";
import User from "./components/User";
import Display from "./components/Display";
import Show from "./components/Show";
import Help from "./components/Help";
import Server from "./components/Server";

import MyContext from "./components/MyContext";
import Verify from "./components/Verify";

function App() {
  const { url, setUrl } = useContext(MyContext);

  return (
    <MyContext.Provider value={{ url, setUrl }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/seats" element={<Seats />} />
          <Route path="/user" element={<User />} />
          <Route path="/display" element={<Display />} />
          <Route path="/show" element={<Show />} />
          <Route path="/help" element={<Help />} />
          <Route path="/setting" element={<Server />} />
          <Route path="/verify" element={<Verify />} />
        </Routes>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
