// Cache of all NBA players
let localCache = [];

export const GetAllPlayers = async () => {
  // Async function to get players from cache or api
  if (localCache.length === 0) {
    let year = new Date().getFullYear();
    // Account for api not handling early year changes
    const month = new Date().getMonth();
    if (month < 6) {
      year -= 1;
    }
    const res = await fetch(`https://data.nba.net/data/10s/prod/v1/${year}/players.json`);
    const json = await res.json();
    localCache = [...json.league.standard];
  }
  return localCache;
};
