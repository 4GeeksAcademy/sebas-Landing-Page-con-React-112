import React from "react";

const addParams = (url) => {
  const sep = url.includes("?") ? "&" : "?";
  return `${url}${sep}auto=format&fit=crop&w=1200&q=70`;
};

const Card = ({ imageUrl, title, text, buttonUrl, buttonLabel }) => {
  const src = addParams(imageUrl);

  return (
    <div className="card h-100">
      <div style={{ aspectRatio: "16/10", overflow: "hidden" }}>
        <img
          src={src}
          className="card-img-top"
          alt={title}
          loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=60"; }}
        />
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-muted-custom">{text}</p>
        <a href={buttonUrl} className="btn btn-primary mt-auto">
          {buttonLabel}
        </a>
      </div>
    </div>
  );
};

export default Card;
