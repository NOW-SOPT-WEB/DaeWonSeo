const mainIcon = document.querySelector("#main-logo");
const hamburgerIcon = document.querySelector("#hamburger-logo");

const aside = document.querySelector("aside");
const cartLink = document.querySelector("#cart-link");

const arrowIcon = document.querySelector("#arrow-icon");
const tablebody = document.querySelector(".cart-table-container table tbody");
const purchaseBtn = document.querySelector("#purchase-button");
const purchaseModal = document.querySelector("#purchase-modal");
const modalContainer = document.querySelector(".modal-content-container");
const modalPriceContainer = document.querySelector(".modal-price-container");
const modalCloseBtn = document.querySelector("#modal-close-button");
const homeBtn = document.querySelector("#home-button");

let cartList = sessionStorage.getItem("cartList");
cartList = cartList ? JSON.parse(cartList) : [];

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

// 장바구니 페이지 홈으로 버튼 클릭 시 home 페이지로 이동
homeBtn.onclick = () => {
  location.href = "../home/home.html";
};

// 모달 닫기 버튼
modalCloseBtn.onclick = () => {
  console.log("닫기");
  purchaseModal.close();
};

// 구매하기 버튼 클릭 시 모달
purchaseBtn.onclick = () => {
  modalContainer.innerHTML = "";
  let totalPrice = 0;

  cartList.forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <img src="${item.image}" alt="${item.name}" />
    <p>${item.price.toLocaleString()}원</p>
    <h3>${item.name}</h3>
  `;
    modalContainer.appendChild(div);
    totalPrice += Number(item.price);
  });

  modalPriceContainer.innerHTML = "";
  const totalPriceElement = document.createElement("p");
  totalPriceElement.innerText = `총 금액: ${totalPrice.toLocaleString()}원`;
  modalPriceContainer.appendChild(totalPriceElement);

  purchaseModal.showModal();
};

// 테이블 row를 생성하는 함수
const displayTable = (cartList) => {
  tablebody.innerHTML = "";

  if (cartList.length === 0) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td colspan="6">장바구니에 상품이 없어요~</td>
    `;
    tablebody.appendChild(tr);
    return;
  }

  cartList.forEach((currentItem) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
            <td><input type="checkbox" /></td>
            <td>
              <img src="${currentItem.image}" />
            </td>
            <td>${currentItem.name}</td>
            <td>${currentItem.price.toLocaleString()}원</td>
            <td>${currentItem.category}</td>
            <td><button id="delete-${currentItem.id}">삭제</button></td>
          `;

    tablebody.appendChild(tr);

    // 버튼 눌렀을 때 삭제하는 기능 추가
    const deleteButton = document.querySelector(`#delete-${currentItem.id}`);
    deleteButton.onclick = () => {
      const newCartList = cartList.filter((item) => item.id !== currentItem.id);
      sessionStorage.setItem("cartList", JSON.stringify(newCartList));
      displayTable(newCartList);
    };
  });
};

// 모달에 아이템과 총 가격 표시

displayTable(cartList);
