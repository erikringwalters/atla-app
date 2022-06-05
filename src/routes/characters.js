import {
  useLocation,
  NavLink,
  Outlet,
  useSearchParams,
} from "react-router-dom";
import { getCharacters } from "../character-data";

export default function Characters() {
  let characters = getCharacters();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
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
            <QueryNavLink
              style={({ isActive }) => ({
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              })}
              to={`/characters/${character.name}`}
              key={character.name}
            >
              {character.name}
            </QueryNavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );

  function QueryNavLink({to, ...props}) {
      let location = useLocation();
      return <NavLink to={to + location.search} {...props} />;
  }

}