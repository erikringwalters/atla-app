import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getCharacter } from "../character-data";

import Card from "../components/ui/Card";

export default function Character() {
  let navigate = useNavigate();
  let location = useLocation();
  let params = useParams();
  let character = getCharacter(params.characterName);
  return (
    <div>
      <Card>
        <h2>{character.name}</h2>
        <img src={character.photo} />

        <p>{character.description}</p>
      </Card>
    </div>
  );
}
