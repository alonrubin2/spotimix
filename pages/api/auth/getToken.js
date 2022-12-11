const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.APP_SECRET;

export default async function handler(req, res) {
  try {
    const auth = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          new Buffer(`${clientId}":"${clientSecret}`).toString("base64"),
      },
      form: {
        grant_type: "client_credentials",
      },
      json: true,
    });
    console.log("🚀 ~ file: getToken.js:19 ~ handler ~ auth", auth);
    const parsedAuth = await auth.json();
    return parsedAuth;
  } catch (e) {
    console.error("I AM ERROR ##########", e);
    return e;
  }
}
