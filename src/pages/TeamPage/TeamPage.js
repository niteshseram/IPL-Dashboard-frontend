import { React, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PieChart } from "react-minimal-pie-chart";
import { MatchDetailCard } from "../../components/MatchDetailCard/MatchDetailCard";
import { MatchSmallCard } from "../../components/MatchSmallCard/MatchSmallCard";
import "./TeamPage.scss";

export const TeamPage = () => {
  const [team, setTeam] = useState({ matches: [] });
  const { teamName } = useParams();

  useEffect(() => {
    const fetchTeam = async () => {
      const response = await fetch(`http://localhost:8080/team/${teamName}`);
      const data = await response.json();
      setTeam(data);
    };
    fetchTeam();
  }, [teamName]);

  if (!team || !team.teamName) {
    return <h1>Team not found</h1>;
  }

  return (
    <div className="TeamPage">
      <div className="team-name-section">
        <h1 className="team-name">{team.teamName}</h1>
      </div>
      <div className="win-loss-section">
        <p>Wins / Losses</p>
        <PieChart
          data={[
            {
              title: "Losses",
              value: team.totalMatches - team.totalWins,
              color: "#903749",
            },
            { title: "Wins", value: team.totalWins, color: "#4aa96c" },
          ]}
          label={({ dataEntry }) => dataEntry.value}
          labelStyle={{
            fill: "#fff",
            fontSize: "16px",
          }}
        />
      </div>
      <div className="match-detail-section">
        <h3>Latest Matches</h3>
        <MatchDetailCard teamName={team.teamName} match={team.matches[0]} />
      </div>
      {team.matches.slice(1).map((match) => (
        <MatchSmallCard key={match.id} teamName={team.teamName} match={match} />
      ))}
      <div className="more-link">
        <Link
          to={`/teams/${teamName}/matches/${process.env.REACT_APP_DATA_END_YEAR}`}
        >
          See More
        </Link>
      </div>
    </div>
  );
};
