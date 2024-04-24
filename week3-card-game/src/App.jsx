import { useState } from "react";
import GameBoard from "@/components/GameBoard";
import Header from "@/components/Header";

const COUNTS = {
  easy: 10,
  normal: 14,
  hard: 18,
};

function App() {
  const [level, setLevel] = useState("easy");
  const totalCount = COUNTS[level];

  return (
    <>
      <Header totalCount={totalCount} />
      <GameBoard
        level={level}
        onLevelChange={setLevel}
        totalCount={totalCount}
      />
    </>
  );
}

export default App;
