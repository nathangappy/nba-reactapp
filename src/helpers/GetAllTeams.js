export const GetAllTeams = async () => {
  // Get current year
  let year = new Date().getFullYear();

  // Account for api not handling early year changes
  const month = new Date().getMonth();
  if (month < 6) {
    year -= 1;
  }

  // Get team list
  const res = await fetch(`https://data.nba.net/data/10s/prod/v1/${year}/teams.json`);
  const json = await res.json();
  const data = json.league.standard.filter((team) => team.isNBAFranchise);
  return data;
};
