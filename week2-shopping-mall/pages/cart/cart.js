const mainIcon = document.querySelector("#main-logo");
const hamburgerIcon = document.querySelector("#hamburger-logo");
const aside = document.querySelector("aside");
const cartLink = document.querySelector("#cart-link");
const arrowIcon = document.querySelector("#arrow-icon");

// 메인 로고 클릭 시 home.html로 이동
mainIcon.onclick = () => {
  location.href = "../home/home.html";
};

// 햄버거 로고 클릭시 모달 메뉴 보이게
hamburgerIcon.onclick = () => {
  aside.classList.add("active");
};

// 사이드 메뉴 화살표 아이콘 클릭하면 모달 메뉴 닫히게
arrowIcon.onclick = () => {
  aside.classList.remove("active");
};

// 장바구니 클릭 시 cart 페이지로 이동
cartLink.onclick = () => {
  location.href = "cart.html";
};
