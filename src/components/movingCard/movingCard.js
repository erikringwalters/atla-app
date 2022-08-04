import PerspectiveCard from "wtc-perspective-card";
import "./movingCard.css";
import "./character.css";
import "../card/card.css";

import { useEffect } from "react";
import {
  useParams,
  useNavigate,
  useLocation,
  NavLink,
  Link,
} from "react-router-dom";

export default function MovingCard(props) {
  console.clear();
  console.log(props);
  console.log(props.cardID !== "undefined");
  useEffect(() => {
    console.log(props.cardID);

    if (
      typeof props.cardID !== undefined &&
      document.getElementById(props.cardID)
    ) {
      const card = new PerspectiveCard(document.getElementById(props.cardID));
    }

  }, []);


  return (
    <div className="cardContainer">
      <div
        id={props.cardID}
        className="perspective-card"
        data-decorator="PerspectiveCard"
        data-ambient={props.dataAmbient}
        pointer-controlled={props.clickable}
      >
        <div className="perspective-card__transformer">
          <div className="perspective-card__shine"></div>
          <div className="card__artwork perspective-card__artwork--front">
            <div className="cardContainer">
              <div className={"cardContent " + props.type}>
                <h3 className="cardTitle">{props.name}</h3>
                <div className={"cardImgContainer " + props.type + "Img"}>
                  <img
                    className={"cardImg"}
                    src={props.photo}
                    alt={props.name}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
