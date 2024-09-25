import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <Contributors>
        CONTRIBUTORS: Aryan Chauhan, Ashutosh Khatiwala, Divyansh Mathur, Harshit Rawat, Nehang K. Limdi
      </Contributors>
      <Links>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/facebook">Facebook</Link>
        <Link href="/instagram">Instagram</Link>
        <Link href="/twitter">Twitter</Link>
      </Links>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: black;
  color: white;
  padding: 20px 0;
  text-align: center;
`;

const Contributors = styled.div`
  margin-bottom: 10px;
  font-size: 0.9em;
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
`;
