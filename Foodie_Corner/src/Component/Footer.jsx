import React from "react";
import { styled } from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <div className="footer-section">
          <h4>Foody Zone</h4>
          <p>Delicious food delivered</p>
        </div>
        <div className="footer-section">
          <p>📞 +1 234 567 8900</p>
          <p>📧 info@foodyzone.com</p>
        </div>
        <div className="footer-section">
          <p>&copy; 2024 Foody Zone. All rights reserved.</p>
        </div>
      </FooterContent>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: white;
  flex-shrink: 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    padding: 12px 15px;
    gap: 15px;
    grid-template-columns: 1fr;
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: 10px;
    gap: 10px;
  }

  .footer-section h4 {
    color: red;
    font-size: 16px;
    margin: 0 0 5px 0;
  }

  .footer-section p {
    margin: 0 0 3px 0;
    font-size: 12px;
    line-height: 1.3;
  }
`;