import { styled } from "styled-components";
import Fooddata from "./Food_data.json";
import { useState, useEffect } from "react";
import SearchResult from "./Component/SearchResult";
import Footer from "./Component/Footer";

function App() {
  const [data, setdata] = useState();
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState();
  const [filteredData, setFilteredData] = useState();

  useEffect(() => {
    const FetchFoodData = async () => {
      try {
        setloading(false);
        setdata(Fooddata);
        setFilteredData(Fooddata);
      } catch (error) {
        seterror("unable data come");
      }
    };
    console.log(Fooddata);
    FetchFoodData();
  }, []);

  // search function
  const searchFood = (e) => {
    const searchValue = e.target.value;
    if (searchValue === "") {
      setFilteredData(data);
    } else {
      const filtered = data?.filter((food) =>
        food.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  // filter by category
  const filterFood = (type) => {
    if (type === "ALL") {
      setFilteredData(data);
    } else {
      const filtered = data?.filter((food) => 
        food.type.toLowerCase() === type.toLowerCase()
      );
      setFilteredData(filtered);
    }
  };

  if (error) return <div>{error}</div>;
  if (loading) return <div>loading.....</div>;

  return (
    <AppContainer>
      <Header>
        <TopContainer>
          <LogoText>
            <span>F</span>
            <span>o</span>
            <span>o</span>
            <span>d</span>
            <span>y</span>
            <span> </span>
            <span>Z</span>
            <span>o</span>
            <span>n</span>
            <span>e</span>
          </LogoText>
          <FilterContainer>
            <Button onClick={() => filterFood("ALL")}>ALL</Button>
            <Button onClick={() => filterFood("Breakfast")}>Breakfast</Button>
            <Button onClick={() => filterFood("lunch")}>Lunch</Button>
            <Button onClick={() => filterFood("Dinner")}>Dinner</Button>
          </FilterContainer>
          <div className="search">
            <input onChange={searchFood} placeholder="Search Here..." />
          </div>
        </TopContainer>
      </Header>
      <MainContent>
        <SearchResult data={filteredData} />
      </MainContent>
      <Footer />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Header = styled.div`
  flex-shrink: 0;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 15px;
  }

  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;

const MainContent = styled.div`
  flex: 1;
  overflow-y: auto;
  min-height: 0;
`;

const LogoText = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: red;
  font-family: 'Arial', sans-serif;

  span {
    display: inline-block;
    animation: bounce 2s infinite;
    animation-delay: calc(0.1s * var(--i));
  }

  span:nth-child(1) { --i: 1; }
  span:nth-child(2) { --i: 2; }
  span:nth-child(3) { --i: 3; }
  span:nth-child(4) { --i: 4; }
  span:nth-child(5) { --i: 5; }
  span:nth-child(6) { --i: 6; }
  span:nth-child(7) { --i: 7; }
  span:nth-child(8) { --i: 8; }
  span:nth-child(9) { --i: 9; }
  span:nth-child(10) { --i: 10; }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }

  &:hover span {
    animation: rainbow 1s infinite;
  }

  @keyframes rainbow {
    0% { color: red; }
    16% { color: orange; }
    33% { color: yellow; }
    50% { color: green; }
    66% { color: blue; }
    83% { color: indigo; }
    100% { color: red; }
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const TopContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  min-height: 80px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    padding: 10px 0;
  }

  @media (max-width: 480px) {
    gap: 10px;
    padding: 8px 0;
  }

  .search input {
    width: 250px;
    height: 35px;
    padding: 0 15px;
    border: 1px solid red;
    border-radius: 5px;
    background: transparent;
    color: white;
    font-size: 16px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }

    @media (max-width: 768px) {
      width: 220px;
    }

    @media (max-width: 480px) {
      width: 100%;
      max-width: 200px;
      height: 32px;
      font-size: 14px;
    }
  }
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: 6px;
  }
`;

export const Button = styled.button`
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 12px;
  font-size: 13px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: darkred;
  }

  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: 12px;
  }

  @media (max-width: 480px) {
    padding: 5px 8px;
    font-size: 11px;
  }
`;