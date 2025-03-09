import React from "react";
import useFetch from "../useFetch.js";
import Card from "./Card";
import "./PostsList.css";

function PostsList(){
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <div className="posts-container">
      <h1>Liste des Posts</h1>
      {loading && <p className="loading">Chargement...</p>}
      {error && <p className="error">{error}</p>}
      <div className="posts-grid">
        {!loading &&
          data &&
          data.map((post) => <Card key={post.id} id={post.id} title={post.title} body={post.body} />)}
      </div>
    </div>
  );
};

export default PostsList;
