export const GetStandings = async (standings_type) => {
  let standings_url = 'https://data.nba.net/data/10s/prod/v1/current/standings_all.json';
  switch (standings_type) {
    case 'Overall':
      standings_url = 'https://data.nba.net/data/10s/prod/v1/current/standings_all.json';
      break;
    case 'Conference':
      standings_url = 'https://data.nba.net/data/10s/prod/v1/current/standings_conference.json';
      break;
    case 'Division':
      standings_url = 'https://data.nba.net/data/10s/prod/v1/current/standings_division.json';
  }
  const res = await fetch(standings_url);
  const json = await res.json();
  return json.league.standard;
};
