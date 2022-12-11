import { useState, useEffect } from "react";

const index = () => {
  const [token, setToken] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const getAuth = async () => {
    const auth = await fetch("/api/auth/getToken");
    const { access_token } = await auth.json();
    setToken(access_token);
    getCategories(access_token);
  };

  const getCategories = async (token) => {
    const body = { token };
    const categories = await fetch("/api/categories/getCategories", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const parsedCategories = await categories.json();
    setCategories(parsedCategories.body.categories.items);
  };

  useEffect(() => {
    getAuth();
  }, []);

  const selectCategory = (e) => {
    if (selectedCategories.includes(e.target.value)) {
      const index = selectedCategories.indexOf(e.target.value);
      const modifiedSelectedCategories = [...selectedCategories];
      modifiedSelectedCategories.splice(index, 1);
      setSelectedCategories(modifiedSelectedCategories);
      return;
    }
    setSelectedCategories([...selectedCategories, e.target.value]);
  };

  return (
    <div>
      {categories.length > 0 && (
        <div className="select">
          <label className="select--label" htmlFor="song1categories">
            Choose A Category for first song:
          </label>
          <select
            onChange={selectCategory}
            value={selectedCategories}
            name="song1categories"
            className="select--dropdown"
            multiple>
            {categories.map((category) => {
              return (
                <option
                  className="select--option"
                  key={category.id}
                  value={category.id}>
                  {category.name}
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
