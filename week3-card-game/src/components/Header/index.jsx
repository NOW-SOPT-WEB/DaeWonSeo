import { useState, useEffect, useRef } from "react";
import styled, { css, keyframes } from "styled-components";

import Modal from "@/components/Modal";

export default function Header({
  totalScore,
  currentScore,
  onResetStatus,
  onSetUpCards,
}) {
  const [scoreIncreased, setScoreIncreased] = useState(false);
  const modalRef = useRef(null);

  const handleRestartGame = () => {
    setTimeout(() => {
      onResetStatus();
      setTimeout(() => {
        onSetUpCards();
      }, 800);
    }, 800);
  };

  useEffect(() => {
    if (totalScore === currentScore) {
      modalRef.current.open();
    }
  }, [totalScore, currentScore]);

  useEffect(() => {
    if (currentScore > 0) {
      setScoreIncreased(true);
      const timeoutId = setTimeout(() => setScoreIncreased(false), 500);
      return () => clearTimeout(timeoutId);
    }
  }, [currentScore]);

  return (
    <HeaderContainer>
      <Modal
        ref={modalRef}
        buttonCaption={"게임으로 돌아가기"}
        onRestartGame={handleRestartGame}
      >
        축하합니다
      </Modal>
      <Title>메이플스토리 카드 맞추기</Title>
      <BottomContainer>
        <Score scoreIncreased={scoreIncreased}>
          {currentScore} / {totalScore}
        </Score>
        <ResetButton onClick={handleRestartGame}>Reset</ResetButton>
      </BottomContainer>
    </HeaderContainer>
  );
}

const highlightScore = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.5); opacity: 1; filter: brightness(150%); }
  100% { transform: scale(1); opacity: 1; }
`;

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
    transform: scale(1.05);
  }
`;

const Score = styled.p`
  font-size: ${({ theme }) => theme.fontSize["3xl"]};
  animation: ${({ scoreIncreased }) =>
    scoreIncreased &&
    css`
      ${highlightScore} 0.5s ease
    `};
`;
