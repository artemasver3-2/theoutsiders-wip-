import React from 'react';
import styled from 'styled-components';


const StyledFooter = styled.footer`
background-color: #000000;
min-height: 15vh;
border-top: 2px solid #62AB37;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


@media only screen and (max-width : 460px)  {
  text-align: center;
  min-height: 10vh;
};
`;

const StyledFooterSpan1 = styled.span`
font-size: 1.75rem;
font-family: Bebas Neue;
color: white;
letter-spacing: 2px;

@media only screen and (max-width : 460px)  {
  font-size: 1rem;
  margin-bottom: .5rem;
  margin-top: -1rem;
};
`;

const StyledFooterSpan2 = styled.span`
font-size: 2rem;
font-family: Pacifico;
color: #62ab37;
letter-spacing: 2px;
margin-top: -12px;
margin-bottom:-1rem;

@media only screen and (max-width : 460px)  {
  font-size: 1rem;
};
`;


export default class Footer extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {

    }
  }
  render() {
    return (
       <StyledFooter>
        <StyledFooterSpan1>Outsider NewsLetter Property of:</StyledFooterSpan1><StyledFooterSpan2>Eleanor Dragon</StyledFooterSpan2>
       </StyledFooter>
    );
  }
}