import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../useFetch.js";
import "./Post.css";

function Post() {
    const { id } = useParams();
    const url=`https://jsonplaceholder.typicode.com/posts/${id}`;
    const { data, loading, error } = useFetch(url);
    const navigate = useNavigate();

    const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="post-container">
      <h1>Détail du Post</h1>
      {loading && <p className="loading">Chargement...</p>}
      {error && <p className="error">{error}</p>}
      {data && (
        <div className="post-content">
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
      )}
      <button className="back-button" onClick={handleBackClick}>⬅ Retour</button>
      </div>
  );
};

export default Post;
