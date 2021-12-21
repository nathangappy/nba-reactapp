// Cache of all NBA players
let localCache = [];

export const GetAllPlayers = async () => {
  // Async function to get players from cache or api
  if (localCache.length === 0) {
    const year = new Date().getFullYear();
    const res = await fetch(`http://data.nba.net/data/10s/prod/v1/${year}/players.json`);
    const json = await res.json();
    localCache = [...json.league.standard];
  }
  return localCache;
};
