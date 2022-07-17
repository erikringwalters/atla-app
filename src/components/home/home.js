import { Link } from "react-router-dom";
import Card from "../ui/Card";

import { getCharacter } from "../../character-data";
import { getCreature } from "../../creature-data";
import MovingCard from "../movingCard/movingCard";

export default function Home() {
  let character = getCharacter("Aang");
  let creature = getCreature("Flying Bison");
  const card = new MovingCard(document.getElementById("card"));

  return (
    <div id="homeDiv">
      <div>
    <MovingCard id="card"></MovingCard>
        <Link to="/characters">
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
        <Link to="/creatures">
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
    </div>
  );
}
