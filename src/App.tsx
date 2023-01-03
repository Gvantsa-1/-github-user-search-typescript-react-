import React, { useEffect, useState } from "react";
import moon from "./assets/icon-moon.svg";
import styled from "styled-components";
import { SearchBar } from "./components/SearchBar";
import { Card } from "./components/Card";
import sun from "./assets/icon-sun.svg";

export type Props = {
  dark?: boolean;
};
function App() {
  const [data, setData] = useState([]);
  const [dark, setDark] = useState(false);
  return (
    <Container dark={dark}>
      <Header>
        <Title dark={dark}>devfinder</Title>
        <DarkBox onClick={() => setDark(!dark)}>
          {dark ? <DarkMode>DARK</DarkMode> : <LightMode>LIGHT</LightMode>}
          {dark ? <MainIcon src={moon} /> : <MainIcon2 src={sun} />}
        </DarkBox>
      </Header>
      <SearchBar data={data} setData={setData} dark={dark} setDark={setDark} />
      <Card data={data} dark={dark} />
    </Container>
  );
}

const DarkBox = styled.div`
  display: flex;
  align-items: baseline;
`;
const Container = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  height: 120vh;
  background: ${(props) =>
    props.dark ? "var(--backgroundWhite)" : "var(--background)"};
  padding: 31px 24px 79px 24px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 480px) {
    height: 100vh;
    overflow: hidden;
  }
`;
const Title = styled.h1<Props>`
  font-size: 26px;
  line-height: 38px;
  color: ${(props) => (props.dark ? "var(--devfinder)" : "#ffffff")};
  margin-right: 123px;
  @media screen and (min-width: 750px) {
    margin-right: 370px;
  }
  @media screen and (min-width: 1100px) {
    margin-right: 520px;
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
const DarkMode = styled.h3`
  margin-right: 16px;
  font-size: 13px;
  font-weight: 700;
  color: var(--lightGrey);
  line-height: 20px;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover {
    color: var(--darkHover);
  }
`;
const LightMode = styled.h3`
  margin-right: 16px;
  font-size: 13px;
  font-weight: 700;
  color: #ffffff;
  line-height: 20px;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover {
    color: var(--lightGrey);
  }
`;
const MainIcon = styled.img`
  cursor: pointer;
  transition: all 0.5s linear;
  &:hover {
    filter: brightness(3%);
  }
`;
const MainIcon2 = styled.img`
  cursor: pointer;
  transition: all 0.5s linear;
  &:hover {
    filter: brightness(50%);
  }
`;
export default App;
