import PerspectiveCard from "wtc-perspective-card";
import "./movingCard.css";
import "./character.css";
import Card from "../ui/Card";
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
  useEffect(() => {
    // if (document.getElementById("card")) {
    //   const card = new PerspectiveCard(document.getElementById("card"));
    // }

    const decorate = function (decorator, nodeSet) {
      const controllers = [];
      Array.from(nodeSet).forEach((node) => {
        const controller = new decorator(node, node.dataset);
        node.data = node.data || {};
        node.data.controller = controller;
        controllers.push(controller);
      });
      return controllers;
    };

    const controllers = decorate(
      PerspectiveCard,
      document.querySelectorAll('[data-decorator="PerspectiveCard"]')
    );
  }, []);

  return (

    <div className="cardContainer">
    <div
      // id="card"
      className="perspective-card"
      data-decorator="PerspectiveCard"
      // data-ambient
    >
      <div className="perspective-card__transformer">
      <div className="perspective-card__shine"></div>
      <div className="card__artwork perspective-card__artwork--front">
          <div className="cardContainer" id="card">
            <div className={"cardContent " + props.element}>
              <h3 className="cardTitle">{props.name}</h3>
              <div
                className={
                  "cardImgContainer " +
                  props.element +
                  "Img"
                }
              >
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
