import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import './TeamDetail.css'

const TeamDetail = () => {
  const { id } = useParams();
  //Call data through api by id
  const [team, setTeam] = useState([]);
  const {
    strStadiumThumb,
    strTeam,
    strTeamBadge,
    intFormedYear,
    strCountry,
    strSport,
    strGender,
    strDescriptionEN,
    strYoutube,
    strWebsite,
    strTwitter,
    strFacebook,
  } = team;
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeam(data.teams[0]))
      .catch(() => console.log("error"));
  }, []);
  return (
    <div className="team-detail">
      <div className="team-detail-container">
        <img src={strStadiumThumb} alt="" />
      </div>
      <div className="TeamBadge">
        <img src={strTeamBadge} alt=""/>
      </div>
    </div>
  );
};

export default TeamDetail;
