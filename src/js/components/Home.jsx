import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

const CARDS = [
  {
    imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    title: "Mountains",
    text: "A peaceful view from the mountainside.",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Ocean",
    text: "Feel the breeze of the open sea.",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1523978591478-c753949ff840",
    title: "Forest",
    text: "Get lost in nature’s green embrace.",
  },
  {
    // ✅ Desert (unsplash)
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    title: "Desert",
    text: "Experience the beauty of golden sands.",
  },
];


const Home = () => {
  return (
    <div id="app" className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="container my-4 flex-grow-1">
        <Jumbotron />
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {CARDS.map((c, i) => (
            <div className="col" key={i}>
              <Card
                imageUrl={c.imageUrl}
                title={c.title}
                text={c.text}
                buttonUrl="#"
                buttonLabel="Find out more!"
              />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
