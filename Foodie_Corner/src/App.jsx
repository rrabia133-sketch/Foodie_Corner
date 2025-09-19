import { styled } from "styled-components";

import logo from "./images/logo.png";
import { useState, useEffect } from "react";
import SearchResult from "./Component/SearchResult";
function App() {
  const [data, setdata] = useState();
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState();
  const BASE_URL = "https://68a19d936f8c17b8f5da4b51.mockapi.io/demi";

  useEffect(() => {
    const FetchFoodData = async () => {
      try {
        const response = await fetch(BASE_URL);
        const jsonData = await response.json();
        setloading(false);

        setdata(jsonData);
      } catch (error) {
        seterror("unable data come");
      }
    };
    console.log(data);
    FetchFoodData();
  }, []);

  // const temp =[{
  //   name: "name 1",
  //    price: 65,
  //     text: "text 1",
  //      image: "image 1",
  //       type: "type 1",
  //        id: "1"},…]

  if (error) return <div>{error}</div>;
  if (loading) return <div>loading.....</div>;
  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src={logo} alt="logo"></img>
          </div>
          <div className="search">
            <input placeholder="Search Here..."></input>
          </div>
        </TopContainer>
        <FilterContainer>
          <Button>ALL</Button>
          <Button>Breakfast</Button>
          <Button>Lunch</Button>
          <Button>Dinner</Button>
        </FilterContainer>
        <SearchResult data={data} />
      </Container>
    </>
  );
}

export default App;
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search input {
    border: 1px solid red;
    background: transparent;
    color: white;
    border-radius: 5px;
    font-size: 16px;
    height: 40px;
    padding: 0 10px;
  }
`;
const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
const Button = styled.button`
  background-color: red;
  border-radius: 5px;
  padding: 6px 12px;
`;
