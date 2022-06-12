import Card from "../../components/ui/Card";
import "./character.css";

import {
  useLocation,
  NavLink,
  Outlet,
  useSearchParams,
} from "react-router-dom";
import { getCharacters } from "../../character-data";

export default function Characters() {
  let characters = getCharacters();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <nav>
      <div className="searchBarContainer">
        <input
          type="text"
          spellCheck="false"
          className="searchBar"
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        <img className="magnifyingGlass" src="../../magnifying-glass.svg" />
      </div>
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
    // <Outlet />
  );

  function QueryNavLink({ to, ...props }) {
    let location = useLocation();
    return <NavLink to={to + location.search} {...props} />;
  }
}
