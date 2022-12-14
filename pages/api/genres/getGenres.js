const Spotify = require("spotify-web-api-node");

export default async function handler(req, res) {
  const spotifyAPI = new Spotify();
  spotifyAPI.setAccessToken(req.body.token);
  try {
    const genres = await spotifyAPI.getAvailableGenreSeeds();
    return res.send(genres);
  } catch (e) {
    console.error("I AM ERROR ##########", e);
  }
}
