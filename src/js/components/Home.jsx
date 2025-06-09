import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

const Home = () => {
  return (
    <div id="app">
      <Navbar />
      <main className="container my-4 flex-grow-1">
        <Jumbotron />
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          <div className="col">
            <Card
              imageUrl="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
              title="Mountains"
              text="A peaceful view from the mountainside."
              buttonUrl="#"
              buttonLabel="Find out more!"
            />
          </div>
          <div className="col">
            <Card
              imageUrl="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              title="Ocean"
              text="Feel the breeze of the open sea."
              buttonUrl="#"
              buttonLabel="Find out more!"
            />
          </div>
          <div className="col">
            <Card
              imageUrl="https://images.unsplash.com/photo-1523978591478-c753949ff840"
              title="Forest"
              text="Get lost in nature’s green embrace."
              buttonUrl="#"
              buttonLabel="Find out more!"
            />
          </div>
          <div className="col">
            <Card
              imageUrl="https://static.wikia.nocookie.net/reinoanimalia/images/5/5c/Desiertos.png/revision/latest?cb=20150820071052&path-prefix=es"
              title="Desert"
              text="Experience the beauty of golden sands."
              buttonUrl="#"
              buttonLabel="Find out more!"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
