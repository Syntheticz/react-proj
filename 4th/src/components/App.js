import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import './App.css'

function importAll(r) {
   let images = {};
   r.keys().map(item => { images[item.replace('./', '')] = r(item); });
   return images;
}

const images = importAll(require.context('../images', false, /\.jpg/));

function App() {
  return (
    <>
    <Navbar />
    <Hero/>
    <div className="cat-experience-container">
    <Card
       img = {images['card1.jpg']}
       name = "Mr. Whiskers"
       ratings = "5/5"
       price = {5}/>
    <Card
       img ={images['fluffy.jpg']}
       name = "Mr. Fluffy"
       ratings = "4/5"
       price = {10}/>  
    <Card
       img ={images['Schrödinger.jpg']}
       name = "Mr. Schrödinger"
       ratings = "69/?"
       price = {420}/>  
    <Card
       img ={images['Grumpy.jpg']}
       name = "Mr. Grumpy"
       ratings = "3/5"
       price = {1}/>
    </div>
    </>  
  );
}

export default App;
