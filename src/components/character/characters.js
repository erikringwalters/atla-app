import Card from "../../components/ui/Card";
import SearchBar from "../searchBar/SearchBar";
import "../../components/ui/card.css";
import { NavLink, useSearchParams } from "react-router-dom";
import "./character.css";

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
          // <NavLink
          //   className="cardLink"
          //   to={`/characters/${character.name}`}
          //   key={character.name}
          // >
            <MovingCard
              name={character.name}
              photo={character.photo}
              element={character.element}
            ></MovingCard>
          // </NavLink>
        ))}
                  </div>

    </nav>
  );
}
