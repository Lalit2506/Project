import React from "react";

function Home() {
console.log ("Welcome Home");
return (
  <header className="home-cta">
      <br/>
      <br/>
      <h1 style = {{color: 'Orange', fontSize: '400%'}}>
          To Do List
      <br/>
          <small style = {{color: 'blue'}}>You can create and look at the tasks you have to do </small>
     </h1>
  </header>
);
}

export default Home;