import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MyGames from "./pages/MyGames";
import GamesHistory from "./pages/GamesHistory";
import GameConfiguration from "./pages/GameConfiguration";
import GameConfigurationItem from "./pages/GameConfigurationItem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/misjuegos" element={<MyGames />} />
        <Route path="/historialpartidas" element={<GamesHistory />} />
        <Route path="/configuracionjuegos" element={<GameConfiguration />} />
        <Route path="/juego/:id" element={<GameConfigurationItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
