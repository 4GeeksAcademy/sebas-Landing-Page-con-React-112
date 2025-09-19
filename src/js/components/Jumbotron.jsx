import React from "react";

const Jumbotron = () => {
  return (
    <section className="hero p-5 mb-5">
      <div className="container py-4">
        <h1 className="display-5 fw-bold">Construye experiencias memorables</h1>
        <p className="col-lg-8 fs-5 text-muted-custom">
          Interfaces modernas, rendimiento y accesibilidad. Este boilerplate en React + Bootstrap
          te da una base limpia para lanzar tu próxima landing.
        </p>
        <div className="d-flex gap-3 flex-wrap">
          <a className="btn btn-primary btn-lg" href="#">Get Started</a>
          <a className="btn btn-outline-light btn-lg" href="#">Ver documentación</a>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
