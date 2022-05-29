import { Link } from 'react-router-dom';
import { getCreatures } from "../creature-data";

export default function creatures() {
    let creatures = getCreatures();
  return (
  <nav>
       {creatures.map((creature) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/creatures/${creature.id}`}
            key={creature.id}
          >
              <img src={creature.photo} alt={creature.name} />
          </Link>
       ))}
  </nav>
  );
}
