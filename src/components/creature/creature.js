import { useParams, Link } from "react-router-dom";
import { getCreature } from "../../creature-data";
import { useEffect } from "react";
import MovingCard from "../movingCard/movingCard";

export default function Creature() {
  let params = useParams();
  let creature = getCreature(params.creatureName);

  return (
    <div>
      <div>
        <Link to="/creatures" className="backBtn">
          Back to creatures
        </Link>
      </div>
      <div className="cardWDetails">
      <MovingCard
          cardID={creature.name + "Card"}
          name={creature.name}
          photo={creature.photo}
          type={'creature'}
          dataAmbient="true"
        ></MovingCard>
        <div className="desc">
          <p>{creature.description}</p>
        </div>
      </div>
    </div>
  );
}
