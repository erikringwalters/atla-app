import SearchBar from "../searchBar/SearchBar";
import { NavLink, useSearchParams } from "react-router-dom";
import { getCharacters } from "../../character-data";
import MovingCard from "../movingCard/movingCard";

export default function Characters() {
  let characters = getCharacters();
  let [searchParams] = useSearchParams();

  return (
    <nav>
      <h1 className="title">Characters</h1>
      <SearchBar />
      <div className="flexContainer">
        {characters
          ?.filter((character) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = character.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })

          ?.map((character) => (
            <NavLink
              to={`/characters/${character.name}`}
              key={character.name}
            >
            <MovingCard
              cardID={character.name + 'Card'}
              name={character.name}
              photo={character.photo}
              element={character.element}
              dataAmbient='false'
            ></MovingCard>
            </NavLink>
          ))}
      </div>
    </nav>
  );
}
