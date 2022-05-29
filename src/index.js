import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Characters from './routes/characters'
import Creatures from './routes/creatures'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
      <Route path="/characters" element={<Characters />} />
        <Route path="/creatures" element={<Creatures />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
