import React from "react";
import "./Team.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Team = (props) => {
  const { strTeam, strSport, strTeamBadge, idTeam, strGender} = props.team;
  return (
    <div className="team">
      <img src={strTeamBadge} alt="" />
      <h3>{strTeam}</h3>
      <p>Sports Type: {strSport} ( {strGender})</p>
      <Link to={"/team-detail/" + idTeam}>
        <button className="explore-btn">
          Explore <FontAwesomeIcon icon={faArrowCircleRight} />
        </button>
      </Link>
    </div>
  );
};

export default Team;
