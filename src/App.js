import logo from "./logo.svg";
import "./App.css";
import { Outlet, Link } from "react-router-dom";
import Headerbar from "./components/headerBar/Headerbar";

export default function App() {
  return (
    <div>
      <Headerbar />
      {/* <div className="titleHead">
        <span>
          <img id="waterIcon" className="titleElementIcon" src="../element-icons/WATER.png" />
        </span>
        <span>
          <img id="earthIcon" className="titleElementIcon" src="../element-icons/EARTH.png" />
        </span>
        <span className="titleText">
          <h1>Avatar: The Last Airbender Trading Cards!</h1>
        </span>
        <span>
          <img id="fireIcon" className="titleElementIcon" src="../element-icons/FIRE.png" />
        </span>
        <span>
          <img id="airIcon" className="titleElementIcon" src="../element-icons/AIR.png" />
        </span>
        <nav>
          <Link className="navLink" to="/characters">Characters</Link> 
          {" | "}
          <Link className="navLink" to="/creatures">Creatures</Link>
        </nav>
      </div> */}

      <Outlet />
      <p className="disclaimer">
        DISCLAMER: This website contains purely fictional products/info. This
        website is intended purely for academic/demonstrative purposes. No
        copyright infringement intended.
      </p>
    </div>
  );
}
