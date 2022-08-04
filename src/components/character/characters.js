import SearchBar from "../searchBar/SearchBar";
import { NavLink, useSearchParams } from "react-router-dom";
import { getCharacters } from "../../character-data";
import MovingCard from "../movingCard/movingCard";
import { useEffect } from "react";

export default function Characters() {
  let characters = getCharacters();
  let [searchParams] = useSearchParams();

  function isMobile() {
    return window.matchMedia(
      "only screen and (max-width: 760px)"
    ).matches;
  };

  useEffect(() => {
    console.log('is mobile: ' + isMobile());
  }, []);

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
              type={character.type}
              dataAmbient={isMobile()}
            ></MovingCard>
            </NavLink>
          ))}
      </div>
    </nav>
  );
}
