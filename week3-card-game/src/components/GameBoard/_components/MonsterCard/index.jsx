import styled from "styled-components";
import imageUrl from "@/assets/images/card-background.png";
import frontImage from "@/assets/images/pig.png";

export default function MonsterCard() {
  return (
    <FlipContainer>
      <CardContainer>
        <FrontImage src={frontImage} />
        <BackImage src={imageUrl} />
      </CardContainer>
    </FlipContainer>
  );
}

const FlipContainer = styled.div`
  border-radius: 0.5rem;
  width: 12rem;
  height: 16rem;
  overflow: hidden;
  perspective: 1100px;
`;

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.5s ease;
  transform-style: preserve-3d;

  &:hover {
    transform: rotateY(180deg);
  }
`;

const FrontImage = styled.img`
  position: absolute;
  object-fit: contain;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.fontPrimary};
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

const BackImage = styled.img`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;
