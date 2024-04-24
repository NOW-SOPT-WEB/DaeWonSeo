import balrogUrl from "@/assets/images/balrog.png";
import dogUrl from "@/assets/images/dog.png";
import goelemUrl from "@/assets/images/golem.png";
import mushroomUrl from "@/assets/images/mushroom.png";
import penguinUrl from "@/assets/images/penguin.png";
import pigUrl from "@/assets/images/pig.png";
import slimeUrl from "@/assets/images/slime.png";
import yettiUrl from "@/assets/images/yetti.png";
import zakumUrl from "@/assets/images/zakum.png";

const imagesInfo = [
  {
    id: "1",
    name: "balrog",
    url: balrogUrl,
    description: "주니어 발록 사진",
  },
  {
    id: "2",
    name: "dog",
    url: dogUrl,
    description: "셀리온 사진",
  },
  {
    id: "3",
    name: "golem",
    url: goelemUrl,
    description: "골렘 사진",
  },
  {
    id: "4",
    name: "mushroom",
    url: mushroomUrl,
    description: "주황버섯 사진",
  },
  {
    id: "5",
    name: "penguin",
    url: penguinUrl,
    description: "페페 사진",
  },
  {
    id: "6",
    name: "pig",
    url: pigUrl,
    description: "리본돼지 사진",
  },
  {
    id: "7",
    name: "slime",
    url: slimeUrl,
    description: "슬라임 사진",
  },
  {
    id: "8",
    name: "yetti",
    url: yettiUrl,
    description: "예티 사진",
  },
  {
    id: "9",
    name: "zakum",
    url: zakumUrl,
    description: "자쿰 사진",
  },
];

// 이미지 배열 동결하는 함수
const deepFreeze = (array) => {
  array.forEach((obj) => Object.freeze(obj));

  Object.freeze(array);
  return array;
};

const frozenImagesInfo = deepFreeze(imagesInfo);

export default frozenImagesInfo;
