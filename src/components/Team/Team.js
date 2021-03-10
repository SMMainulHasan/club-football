import React from 'react';
import './Team.css';

const Team = (props) => {
    const {strTeam, strSport, strTeamBadge} = props.team;
    return (
        <div className="team">
            <img src={strTeamBadge} alt=""/>
            <p>Sports Type: {strSport}</p>
            <h3>{strTeam}</h3>
            <button className= "btn btn-primary">Explore</button>
        </div>
    );
};

export default Team;