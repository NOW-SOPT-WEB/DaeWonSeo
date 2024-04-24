import styled from "styled-components";

export default function LevelButton({ children, onLevelChange, isSelected }) {
  return (
    <Button onClick={onLevelChange} $isSelected={isSelected}>
      {children}
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.2rem solid ${({ theme }) => theme.colors.secondary};
  border-radius: 0.5rem;
  background-color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.colors.secondary : theme.colors.primary};
  width: 10rem;
  height: 4rem;
  font-size: ${({ theme }) => theme.fontSize.md};
  transition: background-color 0.3s ease;
  cursor: pointer;
`;
