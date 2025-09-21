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
          <div className="logo">
            <img src="/images/logo.png" alt="logo" />
          </div>
          <div className="search">
            <input onChange={searchFood} placeholder="Search Here..." />
          </div>
        </TopContainer>
        <FilterContainer>
          <Button onClick={() => filterFood("ALL")}>ALL</Button>
          <Button onClick={() => filterFood("Breakfast")}>Breakfast</Button>
          <Button onClick={() => filterFood("lunch")}>Lunch</Button>
          <Button onClick={() => filterFood("Dinner")}>Dinner</Button>
        </FilterContainer>
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

  .logo img {
    height: 50px;
    width: auto;

    @media (max-width: 480px) {
      height: 40px;
    }
  }

  .search input {
    width: 300px;
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
      width: 280px;
    }

    @media (max-width: 480px) {
      width: 100%;
      max-width: 250px;
      height: 32px;
      font-size: 14px;
    }
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 15px;
  padding-bottom: 15px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 8px;
    padding-bottom: 10px;
  }
`;

export const Button = styled.button`
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: darkred;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 12px;
  }

  @media (max-width: 360px) {
    padding: 5px 10px;
    font-size: 11px;
  }
`;