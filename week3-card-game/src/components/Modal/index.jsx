import { useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

// forwarRef를 사용하여 참조 전달
const Modal = forwardRef(function Modal(
  { children, buttonCaption, onRestartGame },
  ref
) {
  const dialogRef = useRef(null);

  // useImperativeHandle로 컴포넌트 내에서 모달 띄우는 메소드를 정의
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal();
      },
    };
  });

  // 모달 창을 닫고나서 카드 리셋 후 다시 시작
  const handleClose = () => {
    dialogRef.current.close();
    onRestartGame();
  };

  // createPortal로 렌더링 시 모달을 적절한 위치로 이동
  return createPortal(
    <ModalContainer ref={dialogRef}>
      <ContentWrapper>
        <ModalContent>{children}</ModalContent>
        <form method="dialog">
          <ModalButton onClick={handleClose}>{buttonCaption}</ModalButton>
        </form>
      </ContentWrapper>
    </ModalContainer>,
    document.getElementById("modal-root")
  );
});

export default Modal;

const ModalContainer = styled.dialog`
  border: 0;
  border-radius: 0.5rem;
  width: 32rem;
  height: 16rem;
  background: ${({ theme }) => theme.colors.primary};

  &::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ModalContent = styled.h1`
  font-size: ${({ theme }) => theme.fontSize["4xl"]};
`;

const ModalButton = styled.button`
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSize.lg};
`;
