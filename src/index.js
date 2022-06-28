import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './fonts/Herculanum/Herculanum-Regular.woff';

import Home from "./components/home/home";
import Characters from "./components/character/characters";
import Character from "./components/character/character";
import Creatures from "./components/creature/creatures";
import Creature from "./components/creature/creature";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/creatures" element={<Creatures />} />
        <Route path="/characters" element={<Characters />}>
        </Route>
        <Route path="/characters/:characterName" element={<Character />} />
        <Route path="/creatures/:creatureName" element={<Creature />} />
      </Route>
    </Routes>
  </BrowserRouter>


);
