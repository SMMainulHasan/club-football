import React, { useEffect, useState } from "react";
import Team from "../Team/Team";
import "./Home.css";
import field from "../../images/football_field.png";

const Home = () => {
  //Club wise all team data loading
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League")
      .then((res) => res.json())
      .then((data) => setTeams(data.teams))
      .catch(() => console.log("error"))
  }, []);
  return (
    <div>
      <div className="home-container">
        <img src={field} alt="" />
      </div>
      <h1 className="title">Breakout Club Football</h1>
      <div className="home">
        {
          teams.map((team) => <Team key={team.idTeam} team={team} />)
        }
      </div>
    </div>
  );
};

export default Home;
