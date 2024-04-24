import { useReducer, useEffect } from "react";
import GameBoard from "@/components/GameBoard";
import Header from "@/components/Header";
import frozenImagesInfo from "@/constants/images";

const COUNTS = {
  easy: 10,
  normal: 14,
  hard: 18,
};

const initialGameStatus = {
  level: "easy",
  cards: [],
  flippedCards: [],
  solvedCards: [],
};

const reducer = (state, action) => {
  if (action.type === "SET_LEVEL") {
    return { ...state, level: action.level };
  }

  if (action.type === "SETUP_CARDS") {
    const imagesInfo = [...frozenImagesInfo];
    const shuffledImageInfo = imagesInfo.sort(() => Math.random() - 0.5);
    const totalCount = COUNTS[state.level];
    const selectedImages = shuffledImageInfo.slice(0, totalCount / 2);
    const cardSet = selectedImages.flatMap((card) => [
      { ...card, id: `${card.name}-1` },
      { ...card, id: `${card.name}-2` },
    ]);
    const shuffledCards = [...cardSet].sort(() => Math.random() - 0.5);
    return {
      ...state,
      cards: shuffledCards,
    };
  }

  if (action.type === "RESET_STATUS") {
    return {
      ...state,
      flippedCards: [],
      solvedCards: [],
    };
  }

  if (action.type === "ADD_FLIPPED_CARD") {
    return {
      ...state,
      flippedCards: [...state.flippedCards, action.id],
    };
  }

  if (action.type === "RESET_FLIPPED_CARDS") {
    return { ...state, flippedCards: [] };
  }

  if (action.type === "ADD_SOLVED_CARDS") {
    return {
      ...state,
      solvedCards: [...state.solvedCards, ...action.solvedCardsData],
    };
  }
};

function App() {
  const [gameStatus, dispatch] = useReducer(reducer, initialGameStatus);
  const { level, solvedCards } = gameStatus;
  const totalCount = COUNTS[level];
  const totalScore = totalCount / 2;
  const currentScore = solvedCards.length / 2;

  useEffect(() => {
    dispatch({ type: "SETUP_CARDS" });
    dispatch({ type: "RESET_STATUS" });
  }, [level]);

  return (
    <>
      <Header
        currentScore={currentScore}
        totalScore={totalScore}
        onResetStatus={() => dispatch({ type: "RESET_STATUS" })}
        onSetUpCards={() => dispatch({ type: "SETUP_CARDS" })}
      />
      <GameBoard
        gameStatus={gameStatus}
        onChangeLevel={(newLevel) =>
          dispatch({ type: "SET_LEVEL", level: newLevel })
        }
        onAddSolvedCards={(solvedCardsData) =>
          dispatch({ type: "ADD_SOLVED_CARDS", solvedCardsData })
        }
        onAddFlippedCards={(id) => dispatch({ type: "ADD_FLIPPED_CARD", id })}
        onResetFlippedCards={() => dispatch({ type: "RESET_FLIPPED_CARDS" })}
      />
    </>
  );
}

export default App;
