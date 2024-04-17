const mainIcon = document.querySelector("#main-logo");
const hamburgerIcon = document.querySelector("#hamburger-logo");
const aside = document.querySelector("aside");
const cartLink = document.querySelector("#cart-link");
const arrowIcon = document.querySelector("#arrow-icon");
const tablebody = document.querySelector(".cart-table-container table tbody");
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

displayTable(cartList);
