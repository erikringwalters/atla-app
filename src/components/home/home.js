import { Link } from "react-router-dom";
import Card from "../ui/Card";

import { getCharacter } from "../../character-data";
import { getCreature } from "../../creature-data";
import MovingCard from "../movingCard/movingCard";
import PerspectiveCard from "wtc-perspective-card";
import { useEffect } from "react";
// import "./movingCard.css";

export default function Home() {
  let character = getCharacter("Aang");
  let creature = getCreature("Flying Bison");

  useEffect(() => {
    if (document.getElementById("card")) {
      const card = new PerspectiveCard(document.getElementById("card"));
      // console.log(card);
    }
  }, []);

  return (
    <div id="homeDiv">
      <div >
        <div id="card" className="perspective-card" data-decorator="PerspectiveCard" data-ambient>
          <div className="perspective-card__transformer">
            <div className="card__artwork perspective-card__artwork--front">
              <div className="cardContainer" id="card">
                <Card className="card">
                  <div className={"cardContent " + character.element}>
                    <h3 className="cardTitle">{character.name}</h3>
                    <div
                      className={
                        "perspective-card__artwork card__artwork--front cardImgContainer " + character.element + "Img"
                      }
                    >
                      <img
                        className={"cardImg"}
                        src={character.photo}
                        alt={character.name}
                      />
                    </div>
                    <div className="perspective-card__shine"></div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>

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
        {/*
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
        </Link> */}
      </div>
    </div>
  );
}
