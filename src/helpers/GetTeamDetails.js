import { GetPlayerProfile } from './GetPlayerProfile';

export const GetTeamDetails = async (team) => {
  // Team details object to be returned
  let team_details = {
    roster: [],
  };
  // Get current year
  let year = new Date().getFullYear();

  // Account for api not handling early year changes
  const month = new Date().getMonth();
  if (month < 6) {
    year -= 1;
  }

  // Get team roster
  const res = await fetch(
    `https://data.nba.net/data/10s/prod/v1/${year}/teams/${team}/roster.json`
  );
  const json = await res.json();

  // Get bio for each player on roster
  await Promise.all(
    json.league.standard.players.map(async ({ personId }) => {
      const player_profile = await GetPlayerProfile(personId);
      team_details.roster.push(player_profile);
    })
  );

  return team_details;
};
