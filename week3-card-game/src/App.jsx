import { useState, useEffect } from "react";
import GameBoard from "@/components/GameBoard";
import Header from "@/components/Header";
import frozenImagesInfo from "@/constants/images";

const COUNTS = {
  easy: 10,
  normal: 14,
  hard: 18,
};

function App() {
  const [gameStatus, setGameStatus] = useState({
    level: "easy",
    cards: [],
    flippedCards: [],
    solvedCards: [],
  });

  const { level } = gameStatus;
  const totalCount = COUNTS[level];
  const totalScore = totalCount / 2;
  const currentScore = gameStatus.solvedCards.length / 2;

  const cardsSetup = () => {
    const imagesInfo = [...frozenImagesInfo];
    const shuffledImageInfo = imagesInfo.sort(() => Math.random() - 0.5);

    const selectedImages = shuffledImageInfo.slice(0, totalCount / 2);
    const cardSet = selectedImages.flatMap((card) => [
      { ...card, id: `${card.name}-1` },
      { ...card, id: `${card.name}-2` },
    ]);

    const shuffledCards = [...cardSet].sort(() => Math.random() - 0.5);

    setGameStatus((prev) => ({
      ...prev,
      cards: shuffledCards,
    }));
  };

  const cardsReset = () => {
    setGameStatus((prev) => ({
      ...prev,
      flippedCards: [],
      solvedCards: [],
    }));
  };

  const handleChangeLevel = (newLevel) => {
    setGameStatus((prev) => ({
      ...prev,
      level: newLevel,
    }));
  };

  const handleAddFlippedCards = (id) => {
    setGameStatus((prev) => ({
      ...prev,
      flippedCards: [...prev.flippedCards, id],
    }));
  };

  const handleResetFlippedCards = () => {
    setGameStatus((prev) => ({
      ...prev,
      flippedCards: [],
    }));
  };

  const handleAddSolvedCards = (solvedCardsData) => {
    setGameStatus((prev) => ({
      ...prev,
      solvedCards: [...prev.solvedCards, ...solvedCardsData],
    }));
  };

  useEffect(() => {
    cardsReset();
    cardsSetup();
  }, [level]);

  return (
    <>
      <Header currentScore={currentScore} totalScore={totalScore} />
      <GameBoard
        gameStatus={gameStatus}
        onChangeLevel={handleChangeLevel}
        onAddSolvedCards={handleAddSolvedCards}
        onAddFlippedCards={handleAddFlippedCards}
        onResetFlippedCards={handleResetFlippedCards}
      />
    </>
  );
}

export default App;
