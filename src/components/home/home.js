import { Link } from "react-router-dom";

import { getCharacter } from "../../character-data";
import { getCreature } from "../../creature-data";
import MovingCard from "../movingCard/movingCard";
import "./home.css";

export default function Home() {
  let character = getCharacter("Aang");
  let creature = getCreature("Flying Bison");

  return (
    <div id="homeDiv">
      <div className="categorySection">
        <Link to="/characters" className="homeLink">
          <h2>Visit Characters Gallery</h2>
          <div className="cardWDetails">
            <MovingCard
              cardID={character.name + "Card"}
              name={character.name}
              photo={character.photo}
              type={character.type}
              dataAmbient="true"
            ></MovingCard>
          </div>
        </Link>
      </div>

      <div className="categorySection">
        <Link to="/creatures" className="homeLink">
          <h2>Visit Creatures Gallery</h2>
          <div className="cardWDetails">
            <MovingCard
              cardID={creature.name + "Card"}
              name={creature.name}
              photo={creature.photo}
              type={"creature"}
              dataAmbient="true"
            ></MovingCard>
          </div>
        </Link>
      </div>
    </div>
  );
}
