import React from 'react';
import './Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

const Team = (props) => {
    const {strTeam, strSport, strTeamBadge, strStadiumThumb} = props.team;
    return (
        <div className="team">
            <img src={strTeamBadge} alt=""/>
            <h3>{strTeam}</h3>
            <p>Sports Type: {strSport}</p>
            <button className= "explore-btn">Explore <FontAwesomeIcon icon={faArrowCircleRight} /></button>
        </div>
    );
};

export default Team;