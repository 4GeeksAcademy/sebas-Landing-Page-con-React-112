import React from "react";

const Card = ({ imageUrl, title, text, buttonUrl, buttonLabel }) => {
  return (
    <div className="card h-100">
      <div style={{ height: "200px", overflow: "hidden" }}>
        <img
          src={imageUrl}
          className="card-img-top"
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href={buttonUrl} className="btn btn-primary mt-auto">
          {buttonLabel}
        </a>
      </div>
    </div>
  );
};

export default Card;
