import { selectors } from "./selectors.js";

let selectedItems = [];

// 테이블 row를 생성하는 함수
export const displayTable = (cartList) => {
  selectors.tableBody.innerHTML = "";

  if (cartList.length === 0) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
          <td colspan="6">장바구니에 상품이 없어요~</td>
        `;
    selectors.tableBody.appendChild(tr);
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

    selectors.tableBody.appendChild(tr);

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
      const isChecked = e.target.checked;
      if (isChecked) {
        selectedItems.push(currentItem);
      } else {
        selectedItems = selectedItems.filter(
          (item) => item.id !== currentItem.id
        );
      }
    });
  });
};

// 장바구니 table thead 체크박스 체크시 모든 체크박스 체크 되게 함
export const selectItems = (e) => {
  let currentCartList = sessionStorage.getItem("cartList");
  currentCartList = currentCartList ? JSON.parse(currentCartList) : [];

  const isChecked = e.target.checked;
  const checkboxList = document.querySelectorAll('input[type="checkbox"]');

  selectedItems = [];

  checkboxList.forEach((checkbox) => {
    checkbox.checked = isChecked;

    if (isChecked) {
      const itemId = Number(checkbox.id.replace("checkbox-", ""));
      const itemToAdd = currentCartList.find((item) => item.id === itemId);

      if (itemToAdd) selectedItems.push(itemToAdd);
    }
  });
};

// 구매하기 버튼 클릭 시 모달
export const showPurchaseModal = () => {
  selectors.modalContainer.innerHTML = "";
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
    selectors.modalContainer.appendChild(div);
    totalPrice += Number(item.price);
  });

  selectors.modalPriceContainer.innerHTML = "";
  const totalPriceElement = document.createElement("p");
  totalPriceElement.innerText = `총 금액: ${totalPrice.toLocaleString()}원`;
  selectors.modalPriceContainer.appendChild(totalPriceElement);

  selectors.purchaseModal.showModal();
};

// 모달 구매하기 버튼 클릭 시 sessionStorage 초기화
export const updateCartList = () => {
  let currentCartList = sessionStorage.getItem("cartList");
  currentCartList = currentCartList ? JSON.parse(currentCartList) : [];
  const newCartList = currentCartList.filter(
    (item) => !selectedItems.find((selectedItem) => selectedItem.id === item.id)
  );
  sessionStorage.setItem("cartList", JSON.stringify(newCartList));
  displayTable(newCartList);
  selectedItems = [];
};
