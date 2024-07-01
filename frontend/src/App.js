import React from "react";
import Menu from "./components/Menu";
import Posts from "./components/Posts";
import Test from "./components/test";

function App() {
  return (
    <div className="min-h-screen ">
      <div className="container mx-auto p-4">
        <Menu />
        <Posts />
        <Test />
      </div>
    </div>
  );
}

export default App;
