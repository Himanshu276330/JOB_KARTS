import React from "react";
import Header from "./component/header";
import Main from "./component/main";
import Search from "./component/search";
import footer from "./component/header";

function App() {
  return(
    <div>
      <Header/>
      <Main/>
    </div>
  );
}

function App2() {
  return (
    <h1>Hello world 2</h1>
  );
}

function App3() {
  return (
    <h1>Hello world 3</h1>
  );
}

// Default important h.
export default App;
export{
  App2,
  App3
}