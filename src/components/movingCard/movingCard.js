import PerspectiveCard from "wtc-perspective-card";
import "./movingCard.css";
import "./character.css";
import Card from "../ui/Card";
import { useEffect } from "react";
import { useParams, useNavigate, useLocation, NavLink, Link } from "react-router-dom";


export default function MovingCard(props) {
  useEffect(() => {
    if (document.getElementById("card")) {
      const card = new PerspectiveCard(document.getElementById("card"));
    }
  }, []);

  return (
    <div className="cardContainer">
      <div
        id="card"
        className="perspective-card"
        data-decorator="PerspectiveCard"
        data-ambient
      >
        <div className="perspective-card__transformer">
          <div
            className="perspective-card__artwork.perspective-card__artwork--front img"
          >
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/982762/9b1b5b5-1.png" />
          </div>
          <div className="perspective-card__shine"></div>
        </div>
      </div>
    </div>

    // <div>
    //   <div className="cardWDetails">
    //     <Card className="card">
    //       <div className={"cardContent " + props.element}>
    //         <h3 className="cardTitle">{props.name}</h3>
    //         <div className={"cardImgContainer " + props.element + "Img"}>
    //           <img
    //             className={"cardImg"}
    //             src={props.photo}
    //             alt={props.name}
    //           />
    //         </div>
    //       </div>
    //     </Card>
    //     <div className="desc">
    //       <p>{props.description}</p>
    //     </div>
    //   </div>
    // </div>
  );
}
