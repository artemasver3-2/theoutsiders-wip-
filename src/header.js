import React from "react";
import { useLocation } from "react-router-dom";
import styled from 'styled-components'



const StyledTitle = styled.h1`
font-size: 4.5rem;
font-family: Bebas Neue;
color: #62ab37;
text-decoration: none;
letter-spacing: .2rem;
margin-top: .5rem;
`;


const StyledSubtitle = styled.h2`
font-size: 2rem;
font-style: italic;
font-family: Kristi;
color: white;
margin-top: -4.5rem;
margin-left: 20rem;
letter-spacing: 2px;
`;



export default function Header() {
  const path = useLocation().pathname;
  const location = path.split("/")[1];
    return (
      <Header className={"header " + location}>
         <StyledTitle>The Outsiders</StyledTitle>
         <StyledSubtitle>Ebixia's most wanted heros</StyledSubtitle>
     </Header>
  );
}