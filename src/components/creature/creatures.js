import Card from "../../components/ui/Card";
import SearchBar from '../searchBar/SearchBar';
import "../../components/ui/card.css";
import {
  NavLink,
  useSearchParams,
} from "react-router-dom";

import { getCreatures } from "../../creature-data";

export default function Creatures() {
  let creatures = getCreatures();
  let [searchParams] = useSearchParams();

  return (
    <nav>
     <SearchBar />
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
            <Card className="card">
              <div className={"cardContent " + creature.element}>
                <h3 className="cardTitle">{creature.name}</h3>
                <div
                  className={"cardImgContainer " + creature.element + "Img"}
                >
                  <img
                    className={"cardImg"}
                    src={creature.photo}
                    alt={creature.name}
                  />
                </div>
              </div>
            </Card>
          </NavLink>
        ))}
    </nav>
  );

}