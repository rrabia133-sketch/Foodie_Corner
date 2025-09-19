import { styled } from "styled-components";

import logo from "./images/logo.png";
function App() {
  return (
    <>
      <MainContainer>
        <TopContainer>
          <div className="logo">
            <img src={logo} alt="logo"></img>
          </div>
          <div className="search">
            <input placeholder="search Here"></input>
          </div>
        </TopContainer>
      </MainContainer>
    </>
  );
}

export default App;
const MainContainer = styled.div`
  width: 1440;
  height: 241;
  background: rgba(50, 51, 52, 1);
`;
const TopContainer = styled.section``;
