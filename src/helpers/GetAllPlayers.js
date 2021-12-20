import { useEffect } from 'react';

// Cache of all NBA players
const localCache = {};

export const GetAllPlayers = async () => {
  // Get player data once on first render
  useEffect(() => {
    getData();
  }, []);

  // Async function to get players from cache or api
  async function getData() {
    if (
      localCache &&
      Object.keys(localCache).length === 0 &&
      Object.getPrototypeOf(localCache) === Object.prototype
    ) {
      const year = new Date().getFullYear();
      const res = await fetch(`http://data.nba.net/data/10s/prod/v1/${year}/players.json`);
      const json = await res.json();
      Object.assign(localCache, json.league.standard);
    }
    return localCache;
  }
};
