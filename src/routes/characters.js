import { NavLink, Outlet } from "react-router-dom";
import { getCharacters } from "../character-data";

export default function Characters() {
  let characters = getCharacters();
  return (
    <div>
      <nav>
        {characters.map((character) => (
          <NavLink
            style={{ display: "block", margin: "1rem 0" }}
            to={`/characters/${character.id}`}
            key={character.id}
          >
            <img src={character.photo} alt={character.name} />
            <h2>{character.name}</h2>
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
