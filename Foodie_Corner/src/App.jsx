import { styled } from "styled-components";
import Fooddata from "./Food_data.json";
import { useState, useEffect } from "react";
import SearchResult from "./Component/SearchResult";

function App() {
  const [data, setdata] = useState();
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState();

  useEffect(() => {
    const FetchFoodData = async () => {
      try {
        setloading(false);
        setdata(Fooddata);
      } catch (error) {
        seterror("unable data come");
      }
    };
    console.log(Fooddata);
    FetchFoodData();
  }, []);

  if (error) return <div>{error}</div>;
  if (loading) return <div>loading.....</div>;
  
  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="/images/logo.png" alt="logo" />
          </div>
          <div className="search">
            <input placeholder="Search Here..." />
          </div>
        </TopContainer>
        <FilterContainer>
          <Button>ALL</Button>
          <Button>Breakfast</Button>
          <Button>Lunch</Button>
          <Button>Dinner</Button>
        </FilterContainer>
      </Container>
      <SearchResult data={data} />
    </>
  );
}

export default App;

const Container = styled.div`
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

const TopContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  min-height: 100px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding: 15px 0;
  }

  @media (max-width: 480px) {
    gap: 15px;
    padding: 10px 0;
  }

  .logo img {
    height: 60px;
    width: auto;

    @media (max-width: 480px) {
      height: 50px;
    }
  }

  .search input {
    width: 300px;
    height: 40px;
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
      height: 35px;
      font-size: 14px;
    }
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding-bottom: 20px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 10px;
    padding-bottom: 15px;
  }
`;

export const Button = styled.button`
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: darkred;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 13px;
  }

  @media (max-width: 360px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;