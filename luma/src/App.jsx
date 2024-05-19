import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateEvent from "./components/CreateEvent";
import ExploreEvent from "./components/ExploreEvent";
import Home from "./components/Home";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateEvent />} />
      <Route path="/explore" element={<ExploreEvent />} />
    </Routes>
  );
}

export default App;
