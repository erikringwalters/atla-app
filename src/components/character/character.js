import { useParams, Link } from "react-router-dom";
import { getCharacter } from "../../character-data";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MovingCard from "../movingCard/movingCard";

export default function Character() {
  let params = useParams();
  let character = getCharacter(params.characterName);

  return (
    <div>
      <div>
        <Link to="/characters" className="backBtn">
          Back to Characters
        </Link>
      </div>
      <div className="cardWDetails">
        <MovingCard
          cardID={character.name + "Card"}
          name={character.name}
          photo={character.photo}
          type={character.type}
          dataAmbient="true"
        ></MovingCard>
        <div className="desc">
          <p>{character.description}</p>
        </div>
      </div>
    </div>
  );
}
