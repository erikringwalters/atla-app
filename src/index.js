import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Characters from "./routes/characters";
import Character from "./routes/character";

import Creatures from "./routes/creatures";

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
          <Route path=":characterId" element={<Character />} />
        </Route>

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
