import { useState, useEffect } from "react";

const index = () => {
  const getAuth = async () => {
    const auth = await fetch("/api/auth/getToken");
    const parsedAuth = await auth.json();
    console.log("🚀 ~ file: index.js:7 ~ getAuth ~ parsedAuth", parsedAuth);
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
