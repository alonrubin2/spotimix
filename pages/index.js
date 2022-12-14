import { useState, useEffect } from "react";
import Spotify from "react-spotify-embed";
import { getAuth } from "../utils/authUtils";
import { getGenres, getSongs } from "../utils/getUtils";

const index = () => {
  const [token, setToken] = useState("");
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedCategories] = useState([]);
  const [songs, setSongs] = useState([]);
  const [song1, setSong1] = useState(null);
  const [song2, setSong2] = useState(null);

  useEffect(() => {
    (async () => {
      const token = await getAuth();
      setToken(token);
      const genres = await getGenres(token);
      setGenres(genres);
    })();
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
          getSongs(selectedGenres, token, setSongs);
        }}>
        get songs
      </button>
      <button
        onClick={() => {
          pick2Songs();
        }}>
        reshuffle
      </button>

      <div className="songs-container">
        {song1 && (
          <div className="song">
            <h2>Sing this Song</h2>
            <Spotify link={song1.external_urls.spotify} />
          </div>
        )}

        {song2 && (
          <div className="song">
            <h2>Over this Song's music</h2>
            <Spotify link={song2.external_urls.spotify} />
          </div>
        )}
      </div>
    </div>
  );
};

export default index;
