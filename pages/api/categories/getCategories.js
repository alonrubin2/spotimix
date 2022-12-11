const Spotify = require("spotify-web-api-node");

export default async function handler(req, res) {
  const spotifyAPI = new Spotify();
  spotifyAPI.setAccessToken(req.body.token);
  try {
    // const categories = await spotifyAPI.getCategories({
    //   country: "US",
    //   limit: 50,
    // });
    const categories = await spotifyAPI.getAvailableGenreSeeds();
    console.log(
      "🚀 ~ file: getCategories.js:9 ~ handler ~ categories",
      categories
    );
    return res.send(categories);
  } catch (e) {
    console.error("I AM ERROR ##########", e);
  }
}
