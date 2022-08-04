import "./App.css";
import { Outlet } from "react-router-dom";
import Headerbar from "./components/headerBar/Headerbar";
import ScrollToTop from './components/scrollToTop/scrollToTop';

export default function App() {
  return (
    <div>
      <ScrollToTop />
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
