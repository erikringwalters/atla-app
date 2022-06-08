import logo from "./logo.svg";
import "./App.css";
import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
        <h1>
          <span>
            <img className="titleElementIcon" src="../element-icons/WATER.png" />
          </span>
          <span>
            <img className="titleElementIcon" src="../element-icons/EARTH.png" />
          </span>
          <span className='titleText'>Avatar: The Last Airbender Trading Cards!</span>
          <span>
            <img className="titleElementIcon" src="../element-icons/FIRE.png" />
          </span>
          <span>
            <img className="titleElementIcon" src="../element-icons/AIR.png" />
          </span>
        </h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/characters">Characters</Link> |{" "}
        <Link to="/creatures">Creatures</Link>
      </nav>
      <Outlet />
      <p className="disclaimer">
        DISCLAMER: This website contains purely fictional products/info. This
        website is intended purely for academic/demonstrative purposes. No
        copyright infringement intended.
      </p>
    </div>
  );
}
