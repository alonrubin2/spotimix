const Spotify = require("spotify-web-api-node");

export default async function handler(req, res) {
  const spotifyAPI = new Spotify();
  spotifyAPI.setAccessToken(req.body.token);
  try {
    // const categories = await spotifyAPI.getCategories({
    //   country: "US",
    //   limit: 50,
    // });
    const genres = await spotifyAPI.getAvailableGenreSeeds();
    console.log("🚀 ~ file: getCategories.js:9 ~ handler ~ genres", genres);
    return res.send(genres);
  } catch (e) {
    console.error("I AM ERROR ##########", e);
  }
}
