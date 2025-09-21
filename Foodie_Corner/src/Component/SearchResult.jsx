import React from "react";
import { styled } from "styled-components";
import { Button } from "../App";

export default function SearchResult({ data }) {
  return (
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
  );
}

const FoodContainer = styled.section`
  background-image: url("/images/bg.png");
  background-size: cover;
  background-position: center;
  height: 100%;
  padding: 15px;
  overflow-y: auto;
`;

const Foodcards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 15px;
  max-width: 1200px;
  margin: 79px auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 0 10px;
  }

  @media (max-width: 480px) {
    padding: 0 5px;
    gap: 10px;
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
  max-width: 320px;
  height: 140px;
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
    height: 120px;
    max-width: 100%;
  }

  @media (max-width: 360px) {
    height: 110px;
  }

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;
    margin: 8px 0 0 15px;
    flex-shrink: 0;

    @media (max-width: 480px) {
      width: 70px;
      height: 70px;
      margin: 6px 0 0 12px;
    }

    @media (max-width: 360px) {
      width: 60px;
      height: 60px;
      margin: 5px 0 0 10px;
    }
  }

  .food_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    padding: 12px 15px 12px 12px;

    @media (max-width: 480px) {
      padding: 8px 12px 8px 8px;
    }

    @media (max-width: 360px) {
      padding: 6px 10px 6px 6px;
    }
  }

  .info {
    flex: 1;
  }

  h3 {
    font-size: 16px;
    font-weight: bold;

    margin-bottom: 6px;
    line-height: 1.2;

    @media (max-width: 480px) {
      font-size: 14px;
      margin-bottom: 4px;
    }

    @media (max-width: 360px) {
      font-size: 13px;
      margin-bottom: 3px;
    }
  }

  p {
    font-size: 12px;
    color: white;
    line-height: 1.3;
    margin-bottom: 8px;

    @media (max-width: 480px) {
      font-size: 11px;
      margin-bottom: 6px;
    }

    @media (max-width: 360px) {
      font-size: 10px;
      margin-bottom: 4px;
    }
  }
`;
