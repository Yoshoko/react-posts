import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

function Card({ id, title, body }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <hr className="card-divider" />
      <p className="card-body">{body}</p>
      <button className="button-details" onClick={handleClick}>
        Voir Détails
      </button>
    </div>
  );
}

export default Card;
