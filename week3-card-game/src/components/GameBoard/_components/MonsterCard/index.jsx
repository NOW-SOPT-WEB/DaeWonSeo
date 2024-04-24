import styled from "styled-components";
import backImageUrl from "@/assets/images/card-background.png";

export default function MonsterCard({
  frontImageUrl,
  description,
  onClick,
  isFlipped,
}) {
  return (
    <FlipContainer>
      <CardContainer onClick={onClick} $isFlipped={isFlipped}>
        <FrontImage src={frontImageUrl} alt={description} />
        <BackImage src={backImageUrl} alt={"카드 뒷면 핑크빈 이미지"} />
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
  transform: ${({ $isFlipped }) =>
    $isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"};
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
