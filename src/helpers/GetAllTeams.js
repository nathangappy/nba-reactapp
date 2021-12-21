export const GetAllTeams = async () => {
  // Get current year
  const year = new Date().getFullYear();

  // Get team list
  const res = await fetch(`http://data.nba.net/data/10s/prod/v1/${year}/teams.json`);
  const json = await res.json();
  return json;
};
