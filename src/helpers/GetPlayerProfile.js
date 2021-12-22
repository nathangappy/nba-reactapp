import { GetAllPlayers } from './GetAllPlayers';
import { GetAllTeams } from './GetAllTeams';

export const GetPlayerProfile = async (personId) => {
  // Get single players bio
  const players = await GetAllPlayers();
  const playerBio = players.filter((player) => player.personId === personId);

  // Get players team
  const teams = await GetAllTeams();
  const playerTeam = teams.filter((team) => team.teamId === playerBio[0].teamId);

  // Get current year
  const year = new Date().getFullYear();

  // Get Player profile
  const res = await fetch(
    `http://data.nba.net/data/10s/prod/v1/${year}/players/${personId}_profile.json`
  );

  let json = await res.json();
  json.bio = playerBio[0];
  json.team = playerTeam[0];
  return json;
};
