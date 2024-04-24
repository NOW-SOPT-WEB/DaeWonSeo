import { useRef } from "react";
import { forwardRef, useImperativeHandle } from "react";
import styled from "styled-components";

const Modal = forwardRef(function Modal(
  { children, buttonCaption, onRestartGame },
  ref
) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  const handleClose = () => {
    dialog.current.close();
    onRestartGame();
  };

  return (
    <ModalContainer ref={dialog}>
      <ContentWrapper>
        <ModalContent>{children}</ModalContent>
        <form method="dialog">
          <ModalButton onClick={handleClose}>{buttonCaption}</ModalButton>
        </form>
      </ContentWrapper>
    </ModalContainer>
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
