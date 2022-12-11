import { useState, useEffect } from "react";

const index = () => {
  const [token, setToken] = useState("");
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedCategories] = useState([]);
  const [songs, setSongs] = useState([]);
  console.log("🚀 ~ file: index.js:8 ~ index ~ songs", songs);

  const getAuth = async () => {
    const auth = await fetch("/api/auth/getToken");
    const { access_token } = await auth.json();
    setToken(access_token);
    getCategories(access_token);
  };

  const getCategories = async (token) => {
    const body = { token };
    const genres = await fetch("/api/genres/getGenres", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const parsedGenres = await genres.json();

    setGenres(parsedGenres.body.genres);
  };

  useEffect(() => {
    getAuth();
  }, []);

  const selectCategory = (e) => {
    if (selectedGenres.length >= 5) {
      return;
    }
    if (selectedGenres.includes(e.target.value)) {
      const index = selectedGenres.indexOf(e.target.value);
      const modifiedSelectedCategories = [...selectedGenres];
      modifiedSelectedCategories.splice(index, 1);
      setSelectedCategories(modifiedSelectedCategories);
      return;
    }
    setSelectedCategories([...selectedGenres, e.target.value]);
  };

  const getSongs = async () => {
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
    setSongs(parsedSongs.body.tracks);
  };

  return (
    <div>
      {genres.length > 0 && (
        <div className="select">
          <label className="select--label" htmlFor="genres">
            Choose A Category for first song:
          </label>
          <select
            onChange={selectCategory}
            value={selectedGenres}
            name="genres"
            className="select--dropdown"
            multiple>
            {genres.map((genre) => {
              return (
                <option className="select--option" key={genre} value={genre}>
                  {genre}
                </option>
              );
            })}
          </select>
        </div>
      )}

      <button
        onClick={() => {
          getSongs();
        }}>
        get songs
      </button>

      {songs.length > 0 &&
        songs.map((song) => {
          return <div key={song.id}>{song.name}</div>;
        })}
    </div>
  );
};

export default index;
