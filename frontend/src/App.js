import React from "react";
import Menu from "./components/Menu";
//import Posts from "./components/Posts";
import Response from "./components/Response";

function App() {
  return (
    <div className="min-h-screen ">
      <div className="container mx-auto p-4">
        <Menu />
        <Response />
      </div>
    </div>
  );
}

export default App;
