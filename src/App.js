import logo from "./logo.svg";
import "./App.css";
import { Outlet, Link } from "react-router-dom";
import Headerbar from "./components/headerBar/Headerbar";
import { getCharacter } from "./character-data";
import { getCreature } from "./creature-data";
import Card from "./components/ui/Card";

export default function App() {
  let character = getCharacter("Aang");
  let creature = getCreature("Flying Bison");

  return (
    <div>
      <Headerbar />
      <div>
        <Link to="/characters" className="backBtn">
          <h2>Characters</h2>
          <div className="cardWDetails">
            <Card className="card">
              <div className={"cardContent " + character.element}>
                <h3 className="cardTitle">{character.name}</h3>
                <div
                  className={"cardImgContainer " + character.element + "Img"}
                >
                  <img
                    className={"cardImg"}
                    src={character.photo}
                    alt={character.name}
                  />
                </div>
              </div>
            </Card>
          </div>
        </Link>
      </div>

      <div>
        <Link to="/creatures" className="backBtn">
        <h2>Creatures</h2>
          <div className="cardWDetails">
            <Card className="card">
              <div className={"cardContent creature"}>
                <h3 className="cardTitle">{creature.name}</h3>
                <div className={"cardImgContainer creatureImg"}>
                  <img
                    className={"cardImg"}
                    src={creature.photo}
                    alt={creature.name}
                  />
                </div>
              </div>
            </Card>
          </div>
        </Link>
      </div>
      <Outlet />
      <p className="disclaimer">
        DISCLAMER: This website contains purely fictional products/info. This
        website is intended purely for academic/demonstrative purposes. No
        copyright infringement intended.
      </p>
    </div>
  );
}
