import styled from "styled-components";

export default function GameBoard() {
  return <BoardContainer>game board</BoardContainer>;
}

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  background: ${({ theme }) => theme.colors.background};
`;
