import { useState, useEffect } from "react";

const index = () => {
  const [token, setToken] = useState("");
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedCategories] = useState([]);
  console.log("🚀 ~ file: index.js:7 ~ index ~ selectedGenres", selectedGenres);

  const getAuth = async () => {
    const auth = await fetch("/api/auth/getToken");
    const { access_token } = await auth.json();
    setToken(access_token);
    getCategories(access_token);
  };

  const getCategories = async (token) => {
    const body = { token };
    const genres = await fetch("/api/categories/getCategories", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const parsedCategories = await genres.json();
    console.log(
      "🚀 ~ file: index.js:30 ~ getCategories ~ parsedCategories",
      parsedCategories
    );
    setGenres(parsedCategories.body.genres);
  };

  useEffect(() => {
    getAuth();
  }, []);

  const selectCategory = (e) => {
    if (selectedGenres.includes(e.target.value)) {
      const index = selectedGenres.indexOf(e.target.value);
      const modifiedSelectedCategories = [...selectedGenres];
      modifiedSelectedCategories.splice(index, 1);
      setSelectedCategories(modifiedSelectedCategories);
      return;
    }
    setSelectedCategories([...selectedGenres, e.target.value]);
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
    </div>
  );
};

export default index;
