import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import { getCharacter } from "../../character-data";
import { useEffect } from "react";

import Card from "../ui/Card";

export default function Character() {
  let params = useParams();
  let character = getCharacter(params.characterName);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div>
        <Link to="/characters" className="backBtn">
          Back to Characters
        </Link>
      </div>
      <div className="cardWDetails">
        <Card className="card">
          <div className={"cardContent " + character.element}>
            <h3 className="cardTitle">{character.name}</h3>
            <div className={"cardImgContainer " + character.element + "Img"}>
              <img
                className={"cardImg"}
                src={character.photo}
                alt={character.name}
              />
            </div>
          </div>
        </Card>
        <div className="desc">
          <p>{character.description}</p>
        </div>
      </div>
    </div>
  );
}
