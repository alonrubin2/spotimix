import { useState, useEffect } from "react";
import Spotify from "react-spotify-embed";
import { getAuth } from "../utils/authUtils";
import { getSongs } from "../utils/getUtils";
import { genres } from "./../utils/genres";

const index = () => {
  const genresArray = genres;
  const [token, setToken] = useState("");
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [songs, setSongs] = useState([]);
  const [song1, setSong1] = useState(null);
  const [song2, setSong2] = useState(null);

  useEffect(() => {
    (async () => {
      const token = await getAuth();
      setToken(token);
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
      setSelectedGenres(modifiedSelectedCategories);
      return;
    }
    setSelectedGenres([...selectedGenres, e.target.value]);
  };

  const pick2Songs = () => {
    const song1Random = Math.floor(Math.random() * songs.length);
    const song2Random = Math.floor(Math.random() * songs.length);
    setSong1(songs[song1Random]);
    setSong2(songs[song2Random]);
  };

  useEffect(() => {
    pick2Songs();
  }, [songs]);

  return (
    <div className="body">
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
            {genresArray.map((genre) => {
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
          getSongs(selectedGenres, token, setSongs, setSelectedGenres);
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
            <Spotify link={song1.external_urls.spotify} id={"song1"} />
          </div>
        )}

        {song2 && (
          <div className="song">
            <h2>Over this Song's music</h2>
            <Spotify link={song2.external_urls.spotify} id={"song2"} />
          </div>
        )}
      </div>
    </div>
  );
};

export default index;
