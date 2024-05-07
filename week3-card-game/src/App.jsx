import { useReducer, useEffect } from "react";

import GameBoard from "@/components/GameBoard";
import Header from "@/components/Header";
import frozenImagesInfo from "@/constants/images";

// 각 레벨 별 카드의 개수 정의
const COUNTS = {
  easy: 10,
  normal: 14,
  hard: 18,
};

// 리듀서 초기 상태
const initialGameStatus = {
  level: "easy",
  cards: [],
  flippedCards: [],
  solvedCards: [],
};

// 리듀서 함수 정의
const reducer = (state, action) => {
  //레벨을 변경하는 함수
  if (action.type === "SET_LEVEL") {
    return { ...state, level: action.level };
  }

  // 카드를 다시 뽑아서 생성하는 함수
  if (action.type === "SETUP_CARDS") {
    const imagesInfo = [...frozenImagesInfo];
    const shuffledImageInfo = imagesInfo.sort(() => Math.random() - 0.5); // 이미지 순서를 뒤섞음
    const totalCount = COUNTS[state.level];
    const selectedImages = shuffledImageInfo.slice(0, totalCount / 2);
    const cardSet = selectedImages.flatMap((card) => [
      { ...card, id: `${card.name}-1` },
      { ...card, id: `${card.name}-2` },
    ]);
    const shuffledCards = [...cardSet].sort(() => Math.random() - 0.5); // 생성된 이미지를 뒤섞음
    return {
      ...state,
      cards: shuffledCards,
    };
  }

  // 현재 맞추고 있는 쌍, 맞춘 쌍을 리셋
  if (action.type === "RESET_STATUS") {
    return {
      ...state,
      flippedCards: [],
      solvedCards: [],
    };
  }

  // 현재 맞추고 있는 쌍에 카드 추가
  if (action.type === "ADD_FLIPPED_CARD") {
    return {
      ...state,
      flippedCards: [...state.flippedCards, action.id],
    };
  }

  // 현재 맞추고 있는 쌍 초기화 (맞추는 쌍의 카드가 2개일 때 서로 일치하지 않으면 초기화)
  if (action.type === "RESET_FLIPPED_CARDS") {
    return { ...state, flippedCards: [] };
  }

  // 맞춘 카드 쌍 추가
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
