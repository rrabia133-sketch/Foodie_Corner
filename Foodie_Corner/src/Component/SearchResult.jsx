import React from "react";
import { styled } from "styled-components";
import { Button } from "../App";

export default function SearchResult({ data }) {
  return (
    <div>
      <FoodContainer>
        <Foodcards>
          {data?.length === 0 ? (
            <NoDataFound>No Food Found</NoDataFound>
          ) : (
            data?.map((foodData, index) => {
              return (
                <Card key={index}>
                  <div className="food_image">
                    <img src={foodData.image} alt={foodData.name} />
                  </div>
                  <div className="food_info">
                    <div className="info">
                      <h3>{foodData.name}</h3>
                      <p>{foodData.text}</p>
                    </div>
                    <Button> ${foodData.price.toFixed(2)}</Button>
                  </div>
                </Card>
              );
            })
          )}
        </Foodcards>
      </FoodContainer>
    </div>
  );
}

const FoodContainer = styled.section`
  background-image: url("/images/bg.png");
  min-height: calc(100vh - 200px);
  background-size: cover;
  background-position: center;
  padding: 20px;
  width: 100%;
`;

const Foodcards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
    padding: 15px 10px;
  }

  @media (max-width: 480px) {
    padding: 10px 5px;
    gap: 12px;
  }
`;

const NoDataFound = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  font-size: 24px;
  color: white;
  font-weight: bold;
  padding: 50px;

  @media (max-width: 480px) {
    font-size: 20px;
    padding: 30px;
  }
`;

const Card = styled.div`
  width: 100%;
  max-width: 340px;
  height: 167px;
  margin: 0 auto;
  border: 0.66px solid;
  border-image-source: radial-gradient(
    80.38% 222.5% at -13.75% -12.36%,
    #98f9ff 0%,
    rgba(255, 255, 255, 0) 100%
  );
  background: radial-gradient(
    90.16% 143.01% at 15.32% 21.04%,
    rgba(165, 239, 255, 0.2) 0%,
    rgba(110, 191, 244, 0.0447917) 77.08%,
    rgba(70, 144, 213, 0) 100%
  );
  backdrop-filter: blur(26.368392944335938px);
  border-radius: 10px;
  display: flex;
  overflow: hidden;

  @media (max-width: 480px) {
    height: 140px;
    max-width: 100%;
  }

  @media (max-width: 360px) {
    height: 120px;
  }

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
    margin: 10px 0 0 20px;
    flex-shrink: 0;

    @media (max-width: 480px) {
      width: 80px;
      height: 80px;
      margin: 8px 0 0 15px;
    }

    @media (max-width: 360px) {
      width: 70px;
      height: 70px;
      margin: 5px 0 0 10px;
    }
  }

  .food_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    padding: 15px 20px 15px 15px;

    @media (max-width: 480px) {
      padding: 10px 15px 10px 10px;
    }

    @media (max-width: 360px) {
      padding: 8px 12px 8px 8px;
    }
  }

  .info {
    flex: 1;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    color: black;
    margin-bottom: 8px;
    line-height: 1.2;

    @media (max-width: 480px) {
      font-size: 16px;
      margin-bottom: 6px;
    }

    @media (max-width: 360px) {
      font-size: 14px;
      margin-bottom: 4px;
    }
  }

  p {
    font-size: 14px;
    color: #333;
    line-height: 1.3;
    margin-bottom: 10px;
    color: white;

    @media (max-width: 480px) {
      font-size: 12px;
      margin-bottom: 8px;
    }

    @media (max-width: 360px) {
      font-size: 11px;
      margin-bottom: 6px;
    }
  }
`;