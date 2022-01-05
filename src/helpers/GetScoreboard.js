import * as dayjs from 'dayjs';
export const GetScoreboard = async () => {
  // Get the correctly formatted date
  const today = new Date();
  const date = dayjs(today).format('YYYYMMDD');

  // Fetch scoreboard from api
  const res = await fetch(`https://data.nba.net/data/10s/prod/v1/${date}/scoreboard.json`);
  const json = await res.json();
  return json;
};
