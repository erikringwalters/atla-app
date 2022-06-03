import { useParams, useNavigate, useLocation } from "react-router-dom";

import { getCharacter } from "../character-data";

export default function Character() {
  let navigate = useNavigate();
  let location = useLocation();
  let params = useParams();
  let character = getCharacter(parseInt(params.characterId, 10));
  return (
    <main>
      <h2>{character.name}</h2>
      <img src={character.photo} />
    </main>
  );
}
