import SearchBar from "../searchBar/SearchBar";
import { NavLink, useSearchParams } from "react-router-dom";
import MovingCard from "../movingCard/movingCard";
import { useEffect } from "react";

import { getCreatures } from "../../creature-data";

export default function Creatures() {
  let creatures = getCreatures();
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
      <h1 className="title">Creatures</h1>
      <SearchBar />
      <div className="flexContainer">
      {creatures
        ?.filter((creature) => {
          let filter = searchParams.get("filter");
          if (!filter) return true;
          let name = creature.name.toLowerCase();
          return name.startsWith(filter.toLowerCase());
        })
        ?.map((creature) => (
          <NavLink
            className="cardLink"
            to={`/creatures/${creature.name}`}
            key={creature.name}
          >
            <MovingCard
              cardID={creature.name + 'Card'}
              name={creature.name}
              photo={creature.photo}
              type={'creature'}
              dataAmbient={isMobile()}
            ></MovingCard>
          </NavLink>
        ))}
        </div>
    </nav>
  );
}
