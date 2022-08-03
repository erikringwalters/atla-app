import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import { getCharacter } from "../../character-data";
import { useEffect } from "react";
import MovingCard from "../movingCard/movingCard";

import Card from "../ui/Card";
import { propTypes } from "react-bootstrap/esm/Image";

export default function Character() {
  let params = useParams();
  let character = getCharacter(params.characterName);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          element={character.element}
          dataAmbient="true"
        ></MovingCard>
        <div className="desc">
          <p>{character.description}</p>
        </div>
      </div>
    </div>
  );
}
