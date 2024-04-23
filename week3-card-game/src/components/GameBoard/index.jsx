import styled from "styled-components";
import LevelButton from "@/components/GameBoard/_components/LevelButton";

export default function GameBoard() {
  return (
    <BoardContainer>
      <LevelButton>dsd</LevelButton>
      <LevelButton>dsd</LevelButton>
    </BoardContainer>
  );
}

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  background: ${({ theme }) => theme.colors.background};
`;
