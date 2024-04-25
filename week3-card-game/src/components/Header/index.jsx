import { useRef } from "react";
import styled from "styled-components";

import Modal from "@/components/Modal";

export default function Header({
  totalScore,
  currentScore,
  onResetStatus,
  onSetUpCards,
}) {
  const modal = useRef(null);
  const resetTimeoutIdRef = useRef(null);
  const setUpCardsTimeoutIdRef = useRef(null);

  const handleRestartGame = () => {
    resetTimeoutIdRef.current = setTimeout(() => {
      onResetStatus();
      setUpCardsTimeoutIdRef.current = setTimeout(() => {
        onSetUpCards();
      }, 800);
    }, 800);
  };

  if (totalScore === currentScore) {
    modal.current.open();
  }

  return (
    <HeaderContainer>
      <Modal
        ref={modal}
        buttonCaption={"게임으로 돌아가기"}
        onRestartGame={handleRestartGame}
      >
        축하합니다
      </Modal>
      <Title>메이플스토리 카드 맞추기</Title>
      <BottomContainer>
        <Score>
          {currentScore} / {totalScore}
        </Score>
        <ResetButton onClick={handleRestartGame}>Reset</ResetButton>
      </BottomContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 4rem;
  border: 0.4rem solid ${({ theme }) => theme.colors.secondary};
  height: 15vh;
  background: ${({ theme }) => theme.colors.primary};
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize["4xl"]};
`;

const ResetButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 8rem;
  height: 3rem;
  font-size: ${({ theme }) => theme.fontSize.md};
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const Score = styled.p`
  font-size: ${({ theme }) => theme.fontSize["3xl"]};
`;
