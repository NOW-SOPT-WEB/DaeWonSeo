import styled from "styled-components";
import LevelButton from "@/components/GameBoard/_components/LevelButton";
import MonsterCard from "./_components/MonsterCard";

export default function GameBoard() {
  return (
    <BoardContainer>
      <ButtonContainer>
        <LevelButton>Easy</LevelButton>
        <LevelButton>Normal</LevelButton>
        <LevelButton>Hard</LevelButton>
      </ButtonContainer>
      <MonsterCard />
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
