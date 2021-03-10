import React, { useEffect, useState } from "react";
import Team from "../Team/Team";
import "./Home.css";
import field from "../../images/football_field.png";

const Home = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League"
    )
      .then((res) => res.json())
      .then((data) => setTeams(data.teams));
  }, []);
  return (
    <div>
      <div className="home-container">
        <img src={field} alt="" />
      </div>
      <div className="home">
        {teams.map((team) => (
          <Team team={team} />
        ))}
      </div>
    </div>
  );
};

export default Home;
