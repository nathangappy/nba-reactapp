export const GetScoreboard = async () => {
  // Get the correctly formatted date
  const today = new Date();
  const dd = String(today.getDate());
  const mm = String(today.getMonth() + 1);
  const yyyy = String(today.getFullYear());
  const todays_date = yyyy + mm + dd;

  // Fetch scoreboard from api
  const res = await fetch(`https://data.nba.net/data/10s/prod/v1/${todays_date}/scoreboard.json`);
  const json = await res.json();
  return json;
};
