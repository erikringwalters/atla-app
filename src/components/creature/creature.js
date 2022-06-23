import { useParams, Link } from "react-router-dom";
import { getCreature } from "../../creature-data";
import { useEffect } from "react";

import "./creature.css";
import Card from "../ui/Card";
export default function Creature() {
  let params = useParams();
  let creature = getCreature(params.creatureName);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div>
        <Link to="/creatures" className="backBtn">
          Back to creatures
        </Link>
      </div>
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
        <div className="desc">
          <p>{creature.description}</p>
        </div>
      </div>
    </div>
  );
}
