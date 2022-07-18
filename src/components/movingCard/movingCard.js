import PerspectiveCard from "wtc-perspective-card";
import './movingCard.css';
import { useEffect } from "react";


export default function MovingCard() {

  useEffect(() => {
    if(document.getElementById("card")) {
      const c = document.getElementById("card");
      const card = new PerspectiveCard(c);
      console.log(c)
      console.log(card);
    }
  }, []);

  // useEffect(() => { 
  //   const decorate = function (decorator, nodeSet) {
  //     const controllers = [];
  //     Array.from(nodeSet).forEach((node) => {
  //       const controller = new decorator(node, node.dataset);
  //       node.data = node.data || {};
  //       node.data.controller = controller;
  //       controllers.push(controller);
  //     });
  //     return controllers;
  //   };

  //   const controllers = decorate(
  //     PerspectiveCard,
  //     document.querySelectorAll('[data-decorator="PerspectiveCard"]')
  //   );
  // }, []);

  return (

    <div className="cardContainer">
  <div id="card" className="perspective-card" data-decorator="PerspectiveCard" data-ambient>
    <div className="perspective-card__transformer" >
      <div className="perspective-card__artwork.perspective-card__artwork--front
      img">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/982762/9b1b5b5-1.png"
        />
      </div>
      {/* <div className="perspective-card__artwork.perspective-card__artwork--back
      img">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/982762/pokemon_card_backside_in_high_resolution_by_atomicmonkeytcg_dah43cy-fullview.png"
        />
      </div> */}
      <div className="perspective-card__shine"></div>
    </div>
  </div>
  </div>

    // <div id="card" className="perspective-card" data-decorator="PerspectiveCard">
    //   <img
    //     className="perspective-card__img"
    //     src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/982762/9b1b5b5-1.png"
    //   />
    // </div>
  );
}
