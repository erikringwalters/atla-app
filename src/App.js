import logo from "./logo.svg";
import "./App.css";
import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <row id="titleRow">
        <span>
          <img className="titleElement" src="../WATER.svg" />
        </span>
        <span>
          <h1>Avatar: The Last Airbender Trading Cards!</h1>
        </span>
      </row>
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
