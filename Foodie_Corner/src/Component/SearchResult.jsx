import React from "react";
import { styled } from "styled-components";
import bg from "../images/bg.png";
import { Button } from "../App";

export default function SearchResult({ data }) {
  return (
    <div>
      <FoodContainer>
        <Foodcards>
          {data?.map((foodData, index) => {
            return (
              <Card key={index}>
                <div className="food_image">
                  <img src={foodData.image} />
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
          })}
        </Foodcards>
      </FoodContainer>
    </div>
  );
}

const FoodContainer = styled.section`
  background-image: url(${bg});
  min-height: calc(100vh - 187px);
  background-size: cover;
`;
const Foodcards = styled.div``;

const Card = styled.div`
  width: 340px;
  height: 167px;

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
  display: flex;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }

  .food_info {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: space-between;
  }
  .h3 {
    margin-top: 8px;
    font-size: 16px;
    font-weight: 500;
  }
  .p {
    margin-top: 4px;
    font-size: 12px;
  }
  .button {
    font-size: 12px;
  }
`;
