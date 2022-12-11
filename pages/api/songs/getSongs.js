const Spotify = require("spotify-web-api-node");

export default async function handler(req, res) {
  const spotifyAPI = new Spotify();
  spotifyAPI.setAccessToken(req.body.token);
  try {
    const seed_genres = req.body.selectedGenres.join(",");
    const songs = await spotifyAPI.getRecommendations({
      seed_genres,
      limit: 100,
    });
    console.log("🚀 ~ file: getCategories.js:9 ~ handler ~ songs", songs);
    return res.send(songs);
  } catch (e) {
    console.error("I AM ERROR ##########", e);
  }
}
