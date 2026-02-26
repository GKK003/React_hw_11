import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import styled from "styled-components";
import MainDiv from "./components/__organisms/maindiv/maindiv";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MainDiv />
    </>
  );
}

export default App;
