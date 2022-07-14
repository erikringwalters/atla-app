import { motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import { getCharacter } from "../../character-data";
import { useEffect } from "react";

import Card from "../ui/Card";
import "./character.css";

const CardLink = styled(motion.div)`
  text-align: center;
  margin: auto;
  margin-left: 10px;
`;

const CardContent = styled.div`
  border: 15px solid #ffbb00;
  border-radius: 10px;
  text-align: center;
  max-width: 20rem;
  height: 30rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

const CardTitle = styled.div`
  color: black;
  text-decoration-line: none;
  text-align: left;
  margin-left: 15px;
  font-size: 18pt;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const CardImgContainer = styled.div`
  margin: auto;
  border: 5px solid #ffbb00;
  max-width: 16rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

const CardImg = styled(motion.div)`
  margin-top: 5px;
  max-height: 12rem;
`;

export function MotionCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);
  
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
              <CardImg
                style={{ x, y, rotateX, rotateY, rotate: "-25deg", z: 100000 }}
                drag
                dragElastic={0.12}
                whileTap={{ cursor: "grabbing" }}>
                <img src={character.photo} alt={character.name} />
              </CardImg>
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
