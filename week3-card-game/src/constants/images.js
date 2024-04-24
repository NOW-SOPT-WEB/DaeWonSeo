const imagesInfo = [
  {
    id: "1",
    name: "balrog",
    url: "@/assets/images/balrog.png",
    description: "주니어 발록 사진",
  },
  {
    id: "2",
    name: "dog",
    url: "@/assets/images/dog.png",
    description: "셀리온 사진",
  },
  {
    id: "3",
    name: "golem",
    url: "@/assets/images/golem.png",
    description: "골렘 사진",
  },
  {
    id: "4",
    name: "mushroom",
    url: "@/assets/images/mushroom.png",
    description: "주황버섯 사진",
  },
  {
    id: "5",
    name: "penguin",
    url: "@/assets/images/penguin.png",
    description: "페페 사진",
  },
  {
    id: "6",
    name: "pig",
    url: "@/assets/images/pig.png",
    description: "리본돼지 사진",
  },
  {
    id: "7",
    name: "balrog",
    url: "@/assets/images/slime.png",
    description: "슬라임 사진",
  },
  {
    id: "8",
    name: "yetti",
    url: "@/assets/images/yetti.png",
    description: "예티 사진",
  },
  {
    id: "9",
    name: "zakum",
    url: "@/assets/images/zakum.png",
    description: "자쿰 사진",
  },
];

// 이미지 배열 동결하는 함수
const deepFreeze = (array) => {
  array.forEach((obj) => Object.freeze(obj));

  Object.freeze(array);
};

const frozenImagesInfo = deepFreeze(imagesInfo);

export default frozenImagesInfo;
