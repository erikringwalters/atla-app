import PerspectiveCard from "wtc-perspective-card";
import "./movingCard.css";
import "./cardStyles.css";
import "../card/card.css";

import { useEffect } from "react";

export default function MovingCard(props) {
  console.clear();
  useEffect(() => {
    const card = new PerspectiveCard(document.getElementById(props.cardID));
  }, [props.cardID]);

  return (
    <div className="cardContainer">
      <div
        id={props.cardID}
        className="perspective-card"
        data-decorator="ClickablePerspectiveCard"
        data-ambient={props.dataAmbient}
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
