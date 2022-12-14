const Spotify = require("spotify-web-api-node");

export default async function handler(req, res) {
  const spotifyAPI = new Spotify();
  spotifyAPI.setAccessToken(req.body.token);
  try {
    const { selectedGenres } = req.body;
    const recommendations = await Promise.all(
      selectedGenres.map(async (genre) => {
        const res = await spotifyAPI.getRecommendations({
          seed_genres: genre,
          limit: 100,
        });
        return res;
      })
    );
    const tracks = recommendations
      .map((recommendation) => {
        return recommendation.body.tracks;
      })
      .flat();
    return res.send(tracks);
  } catch (e) {
    console.error("I AM ERROR ##########", e);
  }
}
