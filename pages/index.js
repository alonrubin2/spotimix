import { useState, useEffect } from "react";
import Spotify from "react-spotify-embed";
import SongCard from "../components/SongCard";

const index = () => {
  const [token, setToken] = useState("");
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedCategories] = useState([]);
  const [songs, setSongs] = useState([]);
  const [song1, setSong1] = useState(null);
  const [song2, setSong2] = useState(null);
  console.log("🚀 ~ file: index.js:11 ~ index ~ song2", song2);

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
    setSongs(parsedSongs);
  };

  const pick2Songs = () => {
    const song1Random = Math.floor(Math.random() * songs.length);
    const song2Random = Math.floor(Math.random() * songs.length);

    setSong1(songs[song1Random]);
    setSong2(songs[song2Random]);
  };

  useEffect(() => {
    pick2Songs();
  }, [songs.length]);

  return (
    <div>
      {genres.length > 0 && (
        <div className="select">
          <label className="select--label" htmlFor="genres">
            Choose Genres:
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
      <button
        onClick={() => {
          pick2Songs();
        }}>
        reshuffle
      </button>
      {/* <button
        onClick={() => {
          getSong2(song2);
        }}>
        get song 2
      </button> */}
      <div className="songs-container">
        {song1 && (
          <div className="song">
            <h2>Sing this Song:</h2>
            <SongCard song={song1} />
          </div>
        )}
        {song2 && (
          <div className="song">
            <h2>Over this Song's music:</h2>
            <SongCard song={song2} />
          </div>
        )}

        {song2 && <Spotify link={song2.external_urls.spotify} />}
      </div>
    </div>
  );
};

export default index;
