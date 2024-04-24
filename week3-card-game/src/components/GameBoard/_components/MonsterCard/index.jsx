import styled from "styled-components";
import imageUrl from "@/assets/images/card-background.png";

export default function MonsterCard() {
  return (
    <CardContainer>
      <CardImage src={imageUrl} />
    </CardContainer>
  );
}

const CardContainer = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
  width: 12rem;
  height: 16rem;
`;

const CardImage = styled.img`
  object-fit: cover;
  width: 12rem;
  height: 16rem;
`;
