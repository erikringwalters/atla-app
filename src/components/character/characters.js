import Card from "../../components/ui/Card";
import SearchBar from "../searchBar/SearchBar";
import "../../components/ui/card.css";
import { NavLink, useSearchParams } from "react-router-dom";
import "./character.css";

import { getCharacters } from "../../character-data";

export default function Characters() {
  let characters = getCharacters();
  let [searchParams] = useSearchParams();

  return (
    <nav>
      <h1 className="title">Characters</h1>
      <SearchBar />
      {characters
        ?.filter((character) => {
          let filter = searchParams.get("filter");
          if (!filter) return true;
          let name = character.name.toLowerCase();
          return name.startsWith(filter.toLowerCase());
        })
        ?.map((character) => (
          <NavLink
            className="cardLink"
            to={`/characters/${character.name}`}
            key={character.name}
          >
            <Card className="card">
              <div className={"cardContent " + character.element}>
                <h3 className="cardTitle">{character.name}</h3>
                <div
                  className={"cardImgContainer " + character.element + "Img"}
                >
                  <img
                    className={"cardImg"}
                    src={character.photo}
                    alt={character.name}
                  />
                </div>
              </div>
            </Card>
          </NavLink>
        ))}
    </nav>
  );
}
