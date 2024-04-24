import { useEffect, useRef } from "react";
import styled from "styled-components";
import Modal from "@/components/Modal";

export default function Header({
  totalScore,
  currentScore,
  onResetStatus,
  onSetUpCards,
}) {
  const modal = useRef();
  const resetTimeoutIdRef = useRef();
  const setUpCardsTimeoutIdRef = useRef();

  const handleRestartGame = () => {
    resetTimeoutIdRef.current = setTimeout(() => {
      onResetStatus();
      setUpCardsTimeoutIdRef.current = setTimeout(() => {
        onSetUpCards();
      }, 1000);
    }, 1000);
  };

  useEffect(() => {
    if (totalScore === currentScore) {
      modal.current.open();
    }

    return () => {
      clearTimeout(resetTimeoutIdRef.current);
      clearTimeout(setUpCardsTimeoutIdRef.current);
    };
  }, [totalScore, currentScore, onResetStatus, onSetUpCards]);

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
      <Count>
        {currentScore} / {totalScore}
      </Count>
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

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize["4xl"]};
`;

const Count = styled.p`
  font-size: ${({ theme }) => theme.fontSize["3xl"]};
`;
