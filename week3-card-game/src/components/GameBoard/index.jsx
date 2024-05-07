import styled from "styled-components";

import LevelButton from "@/components/GameBoard/_components/LevelButton";
import MonsterCard from "@/components/GameBoard/_components/MonsterCard";

// 버튼 생성을 위한 level 상수 정의
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

  // 카드를 클릭했을 때 함수
  const handleCardClick = (id) => {
    // 현재 맞추고 있는 카드 쌍(flippedCards) | 이미 맞추어서 뒤집혀진 카드 쌍들(solvedCards) | 다시 시작 하는 경우 cards가 미생성 검사 하여 return;
    if (
      flippedCards.length === 2 ||
      solvedCards.includes(id) ||
      flippedCards.includes(id) ||
      cards.length === 0
    )
      return;

    // 현재 맞추고 있는 카드쌍 구성
    const newFlippedCards = [...flippedCards, id];
    onAddFlippedCards(id);

    // 현재 맞추고 있는 카드 쌍이 2개가 됐을 때 서로 일치하는지 검사
    if (newFlippedCards.length === 2) {
      const [firstCard, secondCard] = newFlippedCards;
      const firstCardName = cards.find((card) => card.id === firstCard).name;
      const secondCardName = cards.find((card) => card.id === secondCard).name;

      if (firstCardName === secondCardName) {
        onAddSolvedCards(newFlippedCards);
        onResetFlippedCards();
      } else {
        // 서로 일치 하지 않을 때 맞추고 있는 카드 쌍 reset, 애니메이션 효과 자연스럽게 하기 위해서, setTimeout 설정
        setTimeout(() => {
          onResetFlippedCards();
        }, 1000);
      }
    }
  };

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
