import styled from "styled-components";

export default function Header({ totalCount }) {
  return (
    <HeaderContainer>
      <Title>메이플스토리 카드 맞추기</Title>
      <Count>
        {0} / {totalCount}
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
