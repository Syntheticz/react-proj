import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import data from "./Data";
import './App.css'

const catData = data.map((datas) => {
   return <Card {...datas}/>})


function App() {
   console.log(catData)
  return (
    <>
    <Navbar />
    <Hero/>
    <div className="cat-experience-container">
      {catData}
    </div>
    </>  
  );
}

export default App;
