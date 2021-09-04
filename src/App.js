import React from "react";

function Food(props) {
  console.log();
  return (<h1>I like {props.fav} </h1>);
}

function App() {
  return (
    <div>
      <h1>Hello React!</h1>
      <Food fav="kimchi"/>
      <Food fav="ramen"/>
      <Food fav="kimbob"/>
      <Food fav="water"/>
    </div>
  );
}

export default App;
