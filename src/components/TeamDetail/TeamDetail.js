import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./TeamDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkedAlt,
  faFlag,
  faFutbol,
  faMars,
} from "@fortawesome/free-solid-svg-icons";
import Male from "../../images/male.png";
import Female from "../../images/female.png";
import Facebook from "../../images/Icon/Facebook.png";
import Twitter from "../../images/Icon/Twitter.png";
import YouTube from "../../images/Icon/YouTube.png";

const TeamDetail = () => {
  const { id } = useParams();

  //Call data through api by id
  const [team, setTeam] = useState([]);
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeam(data.teams[0]))
      .catch(() => console.log("error"));
  }, [id]);
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
    strTwitter,
    strFacebook,
  } = team;

  //conditional image display

  return (
    <div>
      <div className="team-detail-cover">
        <img src={strStadiumThumb} alt="" />
      </div>
      <div className="TeamBadge">
        <img src={strTeamBadge} alt="" />
      </div>
      <div className="team-detail">
        <div className="detail-info">
          <div>
            <h1>{strTeam}</h1>
            <p>
              <strong>
                <FontAwesomeIcon icon={faMapMarkedAlt} /> &nbsp; Founded:{" "}
                {intFormedYear}
              </strong>
            </p>
            <p>
              <strong>
                <FontAwesomeIcon icon={faFlag} /> &nbsp; Country: {strCountry}
              </strong>
            </p>
            <p>
              <strong>
                <FontAwesomeIcon icon={faFutbol} /> &nbsp; Sport Type:{" "}
                {strSport}
              </strong>
            </p>
            <p>
              <strong>
                <FontAwesomeIcon icon={faMars} /> &nbsp; Gender: {strGender}
              </strong>
            </p>
          </div>
          <div className="conditional-image">
            {/* <img src={male ? Male : Female} alt="" /> */}
          </div>
        </div>
        <p className="detail">{strDescriptionEN}</p>
        <div className="footer-link">
          <a href={strFacebook}>
            <img target="blank" src={Facebook} alt="" />
          </a>
          <a href={strTwitter}>
            <img target="blank" src={Twitter} alt="" />
          </a>
          <a href={strYoutube}>
            <img target="blank" src={YouTube} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamDetail;
