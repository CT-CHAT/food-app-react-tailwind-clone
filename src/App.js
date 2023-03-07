import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import HeadLindCards from "./components/HeadLindCards"
import Food from "./components/Food.jsx"
import Category from "./components/Category";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadLindCards />
      <Food />
      <Category />
    </div>
  );
}

export default App;
