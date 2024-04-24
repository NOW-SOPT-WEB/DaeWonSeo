import { useState } from "react";
import GameBoard from "@/components/GameBoard";
import Header from "@/components/Header";

function App() {
  const [level, setLevel] = useState("easy");

  const LEVELS = {
    easy: 10,
    normal: 14,
    hard: 18,
  };

  const totalCount = LEVELS[level];

  return (
    <>
      <Header totalCount={totalCount} />
      <GameBoard level={level} onLevelChange={setLevel} />
    </>
  );
}

export default App;
