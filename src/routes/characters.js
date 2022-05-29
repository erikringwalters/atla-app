import { Link } from 'react-router-dom';
import { getCharacters } from "../character-data";

export default function Characters() {
    let characters = getCharacters();
  return (
  <nav>
       {characters.map((character) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/characters/${character.id}`}
            key={character.id}
          >
              <img src={character.photo} alt={character.name} />
          </Link>
       ))}
  </nav>
  );
}
