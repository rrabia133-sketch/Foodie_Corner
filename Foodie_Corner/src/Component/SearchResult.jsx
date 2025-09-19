import React from "react";
import { styled } from "styled-components";
import bg from "../images/bg.png";
//import cake from "../images/cake.jpg";
// import bg from "../images/bg.png";
// import bg from "../images/bg.png";
// import bg from "../images/bg.png";
// import bg from "../images/bg.png";

export default function SearchResult({ data }) {
  return (
    <div>
      <FoodContainer>
        <Foodcards>
          {data?.map((foodData) => {
            console.log("Food data:", foodData); // Add this line
            return (
              <Card key={foodData.name}>
                <div className="food_image">
                  <img src={foodData.image} alt={foodData.name} />
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
  border: 1px solid white;
  margin: 10px;
  padding: 10px;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
`;
