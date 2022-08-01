import React from "react";
import './App.css'
import Navbar from "./Navbar";
import Card from "./Card";
import data from "./Data";

const placeData = data.map((items) => {
  return <Card key = {items.id} {...items} />
});

function App() {
  return (
    <>
      <Navbar/>
      {placeData}
    </>
  );
}

export default App;
