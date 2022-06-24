import logo from "./logo.svg";
import "./App.css";
import { Outlet, Link, NavLink } from "react-router-dom";
import Headerbar from "./components/headerBar/Headerbar";
import { getCharacter } from "./character-data";
import { getCreature } from "./creature-data";

export default function App() {
  return (
    <div>
      <Headerbar />
      
      <Outlet />
      <p className="disclaimer">
        DISCLAMER: This website contains purely fictional products/info. This
        website is intended purely for academic/demonstrative purposes. No
        copyright infringement intended.
      </p>
    </div>
  );
}
