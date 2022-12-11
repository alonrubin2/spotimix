const Spotify = require("spotify-web-api-js");

export default async function handler(req, res) {
  const spotifyAPI = new Spotify();
  spotifyAPI.setAccessToken(process.env.CLIENT_ID);
  try {
    const categories = await spotifyAPI.getCategories({ country: "US" });
    const parsedCategories = await categories.json();
    return parsedCategories;
  } catch (e) {
    console.error("I AM ERROR ##########", e);
  }
}
