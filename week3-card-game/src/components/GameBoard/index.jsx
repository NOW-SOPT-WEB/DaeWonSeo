import { useEffect, useRef } from "react";
import styled from "styled-components";

import LevelButton from "@/components/GameBoard/_components/LevelButton";
import MonsterCard from "@/components/GameBoard/_components/MonsterCard";

const levels = [
  { name: "Easy", value: "easy" },
  { name: "Normal", value: "normal" },
  { name: "Hard", value: "hard" },
];

export default function GameBoard({
  gameStatus,
  onChangeLevel,
  onAddFlippedCards,
  onResetFlippedCards,
  onAddSolvedCards,
}) {
  const { level, cards, flippedCards, solvedCards } = gameStatus;
  const resetFlippedCardsTimeoutIdRef = useRef(null);

  const handleCardClick = (id) => {
    if (
      flippedCards.length === 2 ||
      solvedCards.includes(id) ||
      flippedCards.includes(id)
    )
      return;

    const newFlippedCards = [...flippedCards, id];
    onAddFlippedCards(id);

    if (flippedCards.length === 1) {
      const [firstCard, secondCard] = newFlippedCards;
      const firstCardName = cards.find((card) => card.id === firstCard).name;
      const secondCardName = cards.find((card) => card.id === secondCard).name;

      if (firstCardName === secondCardName) {
        onAddSolvedCards(newFlippedCards);
        onResetFlippedCards();
      } else {
        resetFlippedCardsTimeoutIdRef.current = setTimeout(() => {
          onResetFlippedCards();
        }, 1000);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (resetFlippedCardsTimeoutIdRef.current) {
        clearTimeout(resetFlippedCardsTimeoutIdRef.current);
      }
    };
  }, [flippedCards]);

  return (
    <BoardContainer>
      <ButtonContainer>
        {levels.map(({ name, value }) => (
          <LevelButton
            key={value}
            onLevelChange={() => onChangeLevel(value)}
            isSelected={level === value}
          >
            {name}
          </LevelButton>
        ))}
      </ButtonContainer>
      <CardsContainer>
        {cards.map((card) => (
          <MonsterCard
            key={card.id}
            frontImageUrl={card.url}
            description={card.description}
            onClick={() => handleCardClick(card.id)}
            isFlipped={
              flippedCards.includes(card.id) || solvedCards.includes(card.id)
            }
          />
        ))}
      </CardsContainer>
    </BoardContainer>
  );
}

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 85vh;
  background: ${({ theme }) => theme.colors.background};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
  margin: 2rem auto;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 4rem 0;
  padding: 0 10rem;
`;
