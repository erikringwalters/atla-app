import Card from "../../components/ui/Card";

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
      <input
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
      {characters
        ?.filter((character) => {
          let filter = searchParams.get("filter");
          if (!filter) return true;
          let name = character.name.toLowerCase();
          return name.startsWith(filter.toLowerCase());
        })
        ?.map((character) => (
          <NavLink to={`/characters/${character.name}`} key={character.name}>
            <Card>
              <img className={character.element} src={character.photo} alt={character.name} />
              {character.name}
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
