import { useState, useEffect } from "react";

const index = () => {
  const [token, setToken] = useState("");
  const [categories, setCategories] = useState([]);
  console.log("🚀 ~ file: index.js:6 ~ index ~ categories", categories);

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

  return (
    <div>
      <button
        onClick={async () => {
          await getCategories();
        }}>
        get dem categories
      </button>
      {categories.length > 0 && (
        <>
          <select name="categories">
            <option value={""}>Choose A Category</option>
            {categories.map((category) => {
              return <option value={category.name}>{category.name}</option>;
            })}
          </select>
        </>
      )}
    </div>
  );
};

export default index;
