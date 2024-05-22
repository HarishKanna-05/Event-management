import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateEvent from "./components/CreateEvent";
import ExploreEvent from "./components/ExploreEvent";
import Home from "./components/Home";
import Devs from "./components/Pages/Devs";
import GDSC from "./components/Pages/GDSC";
import IEEE from "./components/Pages/IEEE";
import Leo from "./components/Pages/Leo";
import Others from "./components/Pages/Others";
import Rotaract from "./components/Pages/Rotaract";
import UIpath from "./components/Pages/UIpath";
import Yuva from "./components/Pages/Yuva";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/event/create" element={<CreateEvent />} />
      <Route path="/explore" element={<ExploreEvent />} />
      <Route path="/devs" element={<Devs />} />
      <Route path="/gdsc" element={<GDSC />} />
      <Route path="/uipath" element={<UIpath />} />
      <Route path="/ieee" element={<IEEE />} />
      <Route path="/rotaract" element={<Rotaract />} />
      <Route path="/yuva" element={<Yuva />} />
      <Route path="/leo" element={<Leo />} />
      <Route path="/others" element={<Others />} />
    </Routes>
  );
}

export default App;
