import { useState } from "react";
import styled from "styled-components";

function App() {
  const MyButton = styled.button`
    background-color: aqua;
  `;

  return (
    <>
      <MyButton>초기화면</MyButton>
    </>
  );
}

export default App;
