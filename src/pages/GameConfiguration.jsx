import React from "react";
import Header from "../components/Header";
import GameBubble from "../components/GameBubble";

const GameConfiguration = () => {
  return (
    <>
      <Header />
      <div>
        <GameBubble />
        <GameBubble />
        <GameBubble />
        <GameBubble />
      </div>
    </>
  );
};

export default GameConfiguration;
