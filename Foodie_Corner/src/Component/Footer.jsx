import React from "react";
import { styled } from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <div className="footer-section">
          <h3>Foody Zone</h3>
          <p>Delicious food delivered to your doorstep</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>ALL</li>
            <li>Breakfast</li>
            <li>Lunch</li>
            <li>Dinner</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>📞 +1 234 567 8900</p>
          <p>📧 info@foodyzone.com</p>
          <p>📍 123 Food Street, City</p>
        </div>
      </FooterContent>
      <FooterBottom>
        <p>&copy; 2024 Foody Zone. All rights reserved.</p>
      </FooterBottom>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: white;
  margin-top: 50px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;

  @media (max-width: 768px) {
    padding: 30px 15px;
    gap: 20px;
  }

  @media (max-width: 480px) {
    padding: 20px 10px;
    grid-template-columns: 1fr;
    text-align: center;
  }

  .footer-section h3 {
    color: red;
    font-size: 24px;
    margin-bottom: 10px;
  }

  .footer-section h4 {
    color: red;
    font-size: 18px;
    margin-bottom: 15px;
  }

  .footer-section p {
    margin-bottom: 8px;
    line-height: 1.5;
  }

  .footer-section ul {
    list-style: none;
    padding: 0;
  }

  .footer-section ul li {
    margin-bottom: 8px;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: red;
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #333;
  padding: 20px;
  text-align: center;
  background-color: #111;

  p {
    margin: 0;
    font-size: 14px;
    color: #ccc;
  }
`;
