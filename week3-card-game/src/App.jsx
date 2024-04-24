import { useState } from "react";
import GameBoard from "@/components/GameBoard";
import Header from "@/components/Header";

function App() {
  const [level, setLevel] = useState("easy");

  return (
    <>
      <Header level={level} />
      <GameBoard level={level} onLevelChange={setLevel} />
    </>
  );
}

export default App;
