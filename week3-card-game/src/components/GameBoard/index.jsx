import styled from "styled-components";
import LevelButton from "@/components/GameBoard/_components/LevelButton";
import MonsterCard from "@/components/GameBoard/_components/MonsterCard";
import frozenImagesInfo from "@/constants/images";

export default function GameBoard({ level, onLevelChange, totalCount }) {
  const levels = [
    { name: "Easy", value: "easy" },
    { name: "Normal", value: "normal" },
    { name: "Hard", value: "hard" },
  ];

  const imagesInfo = [...frozenImagesInfo];
  const selectedImages = imagesInfo.slice(0, totalCount / 2);
  const cardSet = selectedImages.map((imageItem) => ({
    name: imageItem.name,
    url: imageItem.url,
    description: imageItem.description,
  }));
  const cardList = [...cardSet, ...cardSet].sort(() => Math.random() - 0.5);

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
        {cardList.map((imageItem, index) => (
          <MonsterCard
            key={`${imageItem.name}-${index}`}
            frontImageUrl={imageItem.url}
            description={imageItem.description}
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
