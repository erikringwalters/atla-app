import { Link } from "react-router-dom";
import Card from "../ui/Card";
import { ParallaxBanner } from "react-scroll-parallax";

import { getCharacter } from "../../character-data";
import { getCreature } from "../../creature-data";

export default function Home() {
  let character = getCharacter("Aang");
  let creature = getCreature("Flying Bison");

  return (
    <div id="homeDiv">
      <div>
        {/* <ParallaxBanner
          layers={[
            {
              image:
                "https://hips.hearstapps.com/hmg-prod/images/avatar-nickelodeon-900x450-1590004760.png?crop=1xw:1xh;center,top&resize=1200:*",
              speed: -20,
            },
          ]}
          style={{ aspectRatio: "2 / 1" }}
        /> */}
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
