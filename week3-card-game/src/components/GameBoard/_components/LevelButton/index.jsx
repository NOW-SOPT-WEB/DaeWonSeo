import styled from "styled-components";

export default function LevelButton({ children }) {
  return <Button>{children}</Button>;
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.2rem solid ${({ theme }) => theme.colors.secondary};
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 10rem;
  height: 4rem;
  font-size: ${({ theme }) => theme.fontSize.md};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
`;
