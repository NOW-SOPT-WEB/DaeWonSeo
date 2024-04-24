import styled from "styled-components";
import LevelButton from "@/components/GameBoard/_components/LevelButton";
import MonsterCard from "@/components/GameBoard/_components/MonsterCard";
import frozenImagesInfo from "@/constants/images";

export default function GameBoard({ level, onLevelChange }) {
  const levels = [
    { name: "Easy", value: "easy" },
    { name: "Normal", value: "normal" },
    { name: "Hard", value: "hard" },
  ];
  console.log(frozenImagesInfo);

  return (
    <BoardContainer>
      <ButtonContainer>
        {levels.map(({ name, value }) => (
          <LevelButton
            key={value}
            onLevelChange={() => onLevelChange(value)}
            isSelected={level === value}
          >
            {name}
          </LevelButton>
        ))}
      </ButtonContainer>
      <CardsContainer>
        {frozenImagesInfo.map((image) => (
          <MonsterCard
            key={image.name}
            frontImageUrl={image.url}
            description={image.description}
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
