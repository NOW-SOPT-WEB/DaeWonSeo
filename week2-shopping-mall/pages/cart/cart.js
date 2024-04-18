const mainIcon = document.querySelector("#main-logo");
const hamburgerIcon = document.querySelector("#hamburger-logo");
const aside = document.querySelector("aside");
const cartLink = document.querySelector("#cart-link");
const arrowIcon = document.querySelector("#arrow-icon");
const tablebody = document.querySelector(".cart-table-container table tbody");
const selectAllCheckbox = document.querySelector(
  'thead input[type="checkbox"]'
);
const purchaseBtn = document.querySelector("#purchase-button");
const purchaseModal = document.querySelector("#purchase-modal");
const modalContainer = document.querySelector(".modal-content-container");
const modalPriceContainer = document.querySelector(".modal-price-container");
const modalPurchaseBtn = document.querySelector("#modal-purchase-button");
const modalCloseBtn = document.querySelector("#modal-close-button");
const homeBtn = document.querySelector("#home-button");

let cartList = sessionStorage.getItem("cartList");
cartList = cartList ? JSON.parse(cartList) : [];
let selectedItems = [];

// 메인 로고 클릭 시 home.html로 이동
mainIcon.addEventListener("click", () => {
  location.href = "../home/home.html";
});

// 햄버거 로고 클릭 시 모달 메뉴 보이게
hamburgerIcon.addEventListener("click", () => {
  aside.classList.add("active");
});

// 사이드 메뉴 화살표 아이콘 클릭하면 모달 메뉴 닫히게
arrowIcon.addEventListener("click", () => {
  aside.classList.remove("active");
});

// 장바구니 클릭 시 cart 페이지로 이동
cartLink.addEventListener("click", () => {
  location.href = "cart.html";
});

// 장바구니 페이지 홈으로 버튼 클릭 시 home 페이지로 이동
homeBtn.addEventListener("click", () => {
  location.href = "../home/home.html";
});

//모달 닫기 버튼 누르면 모달 닫히게
modalCloseBtn.addEventListener("click", () => {
  purchaseModal.close();
});

// 장바구니 table thead 체크박스 체크시 모든 체크박스 체크 되게 함
selectAllCheckbox.addEventListener("change", (e) => {
  const isChecked = e.target.checked;
  const checkboxList = document.querySelectorAll('input[type="checkbox"]');

  selectedItems = [];

  checkboxList.forEach((checkbox) => {
    checkbox.checked = isChecked;

    if (e.target.checked) {
      const itemId = Number(checkbox.id.replace("checkbox-", ""));
      const itemToAdd = cartList.find((item) => item.id === itemId);

      if (itemToAdd) selectedItems.push(itemToAdd);
    }
  });
});

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
        <td><input id="checkbox-${currentItem.id}" type="checkbox" /></td>
        <td>
          <img src="${currentItem.image}" />
        </td>
        <td>${currentItem.name}</td>
        <td>${currentItem.price.toLocaleString()}원</td>
        <td>${currentItem.category}</td>
        <td><button id="delete-${currentItem.id}">삭제</button></td>
      `;

    tablebody.appendChild(tr);

    const deleteButton = document.querySelector(`#delete-${currentItem.id}`);
    const checkbox = document.querySelector(`#checkbox-${currentItem.id}`);

    // 버튼 눌렀을 때 삭제하는 기능 추가
    deleteButton.addEventListener("click", () => {
      const newCartList = cartList.filter((item) => item.id !== currentItem.id);
      sessionStorage.setItem("cartList", JSON.stringify(newCartList));

      displayTable(newCartList);
    });

    //체크 박스를 선택했을 때 선택된 아이템 배열에 추가
    checkbox.addEventListener("change", (e) => {
      if (e.target.checked) {
        selectedItems.push(currentItem);
      } else {
        selectedItems = selectedItems.filter(
          (item) => item.id !== currentItem.id
        );
      }
    });
  });
};

// 구매하기 버튼 클릭 시 모달
purchaseBtn.addEventListener("click", () => {
  modalContainer.innerHTML = "";
  let totalPrice = 0;

  if (selectedItems.length === 0) {
    alert("구매하실 상품을 선택해 주세요!");
    return;
  }

  selectedItems.forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <img src="${item.image}" alt="${item.name}" />
        <p>${item.price.toLocaleString()}원</p>
        <p>${item.name}</p>
      `;
    modalContainer.appendChild(div);
    totalPrice += Number(item.price);
  });

  modalPriceContainer.innerHTML = "";
  const totalPriceElement = document.createElement("p");
  totalPriceElement.innerText = `총 금액: ${totalPrice.toLocaleString()}원`;
  modalPriceContainer.appendChild(totalPriceElement);

  purchaseModal.showModal();
});

// 모달 구매하기 버튼 클릭 시 sessionStorage 초기화
modalPurchaseBtn.addEventListener("click", () => {
  const newCartList = cartList.filter(
    (item) => !selectedItems.find((selectedItem) => selectedItem.id === item.id)
  );
  sessionStorage.setItem("cartList", JSON.stringify(newCartList));
  displayTable(newCartList);
  selectedItems = [];
  alert("구매가 완료되었습니다.");
});

// 초기 테이블 생성
displayTable(cartList);
