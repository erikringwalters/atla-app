import logo from './logo.svg';
import './App.css';
import { Outlet, Link } from "react-router-dom";


export default function App() {
  return (
    <div>
      <h1>Avatar: The Last Airbender Trading Cards!</h1>
      <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
      >
        <Link to="/characters">Characters</Link> | {" "}
        <Link to="/creatures">Creatures</Link>
        </nav>
        <Outlet />
        <p className='disclamer'>DISCLAMER: This website contains purely fictionaly products/info. This website is intended purely for academic/demonstrative purposes. No copyright infringement intended.</p>
    </div>
  );
}