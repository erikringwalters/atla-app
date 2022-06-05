import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getCharacter } from "../character-data";

export default function Character() {
  let navigate = useNavigate();
  let location = useLocation();
  let params = useParams();
  let character = getCharacter(parseInt(params.characterId, 10));
  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {character.amount}</h2>
      <p>
        {character.name}: {character.id}
      </p>
      <p>Due Date: {character.due}</p>
      <p>
        <button
          onClick={() => {
            // deleteCharacter(character.id);
            navigate("/characters" + location.search);
          }}
        >
          Delete
        </button>
      </p>
    </main>
  );
}
