import { useState, useEffect } from "react";

const index = () => {
  //   useEffect(() => {
  //     (async () => {
  //       const auth = await fetch("/api/auth/getToken");
  //       console.log("🚀 ~ file: index.js:7 ~ auth", auth);
  //     })();
  //   }, []);

  const getAuth = async () => {
    const auth = await fetch("/api/auth/getToken");
    console.log("🚀 ~ file: index.js:7 ~ auth", auth);
  };

  const getCategories = async () => {
    const categories = await fetch("/api/categories/getCategories");
    console.log(
      "🚀 ~ file: index.js:7 ~ getCategories ~ categories",
      categories
    );
  };

  return (
    <div>
      <button
        onClick={() => {
          getAuth();
        }}>
        get dem Token
      </button>

      <button
        onClick={() => {
          getCategories();
        }}>
        get dem categories
      </button>
    </div>
  );
};

export default index;
