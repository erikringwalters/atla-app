import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getCharacter } from "../character-data";

export default function Character() {
  let navigate = useNavigate();
  let location = useLocation();
  let params = useParams();
  let character = getCharacter(params.characterName);
  return (
    <main style={{ padding: "1rem" }}>
      <h2>{character.name}</h2>
      <img src={character.photo} />
        
      <p>{character.description}</p>
      <p>
     
      </p>
    </main>
  );
}
