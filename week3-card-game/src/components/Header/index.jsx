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

  // 현재 점수가 전체 점수에 도달 했을 때 모달 띄워서 다시 시작
  useEffect(() => {
    if (totalScore === currentScore) {
      modalRef.current.open();
    }
  }, [totalScore, currentScore]);

  // 현재 스코어가 + 일 때 스코어에 애니메이션 추가
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

// 스코어 증가했을 때 애니메이션 정의
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
  position: fixed;
  right: 2rem;
  width: 8rem;
  height: 3rem;
  background-color: ${({ theme }) => theme.colors.secondary};
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
