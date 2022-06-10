import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './fonts/Herculanum/Herculanum-Regular.ttf';

import Characters from "./components/character/characters";
import Character from "./components/character/character";
import Creatures from "./components/creature/creatures";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/creatures" element={<Creatures />} />
        <Route path="/characters" element={<Characters />}>
          <Route
          element={
            <main style={{padding: '1rem'}}>
              <p>Select an invoice</p>
            </main>
          }
          />

        </Route>
        <Route path="/characters/:characterName" element={<Character />} />

        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
