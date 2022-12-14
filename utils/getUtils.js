export const getGenres = async (token) => {
  const body = { token };
  const genres = await fetch("/api/genres/getGenres", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const parsedGenres = await genres.json();

  return parsedGenres.body.genres;
};

export const getSongs = async (selectedGenres, token, setSongs) => {
  if (selectedGenres.length === 0) {
    alert("Please selected at least 1 genre");
    return;
  }
  const body = { token, selectedGenres };
  const songs = await fetch("/api/songs/getSongs", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const parsedSongs = await songs.json();
  setSongs(parsedSongs);
};
